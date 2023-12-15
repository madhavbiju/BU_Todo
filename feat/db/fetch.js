const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bodyParser = require("body-parser"); // Add this line

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Eg@riot63",
  database: "todo",
  connectionLimit: 10,
});

app.use(cors());
app.use(bodyParser.json()); // Add this line

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.get("/items", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM items");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/items", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
