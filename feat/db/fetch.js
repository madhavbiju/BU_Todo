require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "todo",
  connectionLimit: 10,
});
app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Get all items
app.get("/items", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM items");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add new item
app.post("/items", async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO items (title, description) VALUES (?, ?)",
      [title, description]
    );

    const insertedItemId = result.insertId;
    res.status(201).json({ id: insertedItemId, title, description });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete multiple items by IDs
app.delete("/items", async (req, res) => {
  const itemIds = req.body.itemIds;

  if (!itemIds || !Array.isArray(itemIds) || itemIds.length === 0) {
    return res.status(400).json({ error: "Invalid or empty itemIds array" });
  }

  try {
    // Create a placeholder string for the IN clause based on the number of IDs
    const placeholders = itemIds.map(() => "?").join(", ");

    const [result] = await pool.execute(
      `DELETE FROM items WHERE id IN (${placeholders})`,
      itemIds
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No items found for deletion" });
    }

    res.json({ message: "Items deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Edit by id
app.put("/items/:id", async (req, res) => {
  const itemId = req.params.id;
  const updatedFields = req.body;

  // Check if the request body contains valid fields to update
  if (!updatedFields || Object.keys(updatedFields).length === 0) {
    return res.status(400).json({ error: "Invalid or empty update fields" });
  }

  try {
    // Create SET clause with placeholders for each field
    const setClause = Object.keys(updatedFields)
      .map((field) => `${field} = ?`)
      .join(", ");

    // Create array of values corresponding to the placeholders
    const values = Object.values(updatedFields);

    // Execute UPDATE query
    const [result] = await pool.execute(
      `UPDATE items SET ${setClause} WHERE id = ?`,
      [...values, itemId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "No item found for update" });
    }

    res.json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
