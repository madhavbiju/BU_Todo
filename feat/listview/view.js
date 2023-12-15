// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/items"); // Replace with your API endpoint
    const data = await response.json();
    createCards(data); // After fetching data, call the function to create cards
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data from the API
fetchData();
selectedItems = [];
function createCards(data) {
  let cardContainer = document.querySelector("#cardContainer");

  data.forEach((obj, index) => {
    // Check if the title contains the search value
    // Create card element
    let cardDiv = document.createElement("div");
    cardDiv.className = "col-md-12 mb-4";

    let card = document.createElement("div");
    card.className = "card border border-0";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body  d-flex align-items-center";

    // Add title
    let title = document.createElement("h5");
    title.className = "card-title col-md-auto col2 m-2 font-weight-bold";
    title.textContent = obj.title;

    // Add text
    let text = document.createElement("p");
    text.className = "card-text m-1 ms-2 text-truncate font-italic";
    text.textContent = obj.description;

    let checkBox = document.createElement("input");
    checkBox.className = "col-1 checkboxes";
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", `checkbox-${obj.id}`); // Add item ID to the checkbox ID
    checkBox.addEventListener("change", function () {
      enableDeleteButton();

      // Get the item ID from the checkbox ID
      const itemId = parseInt(this.id.split("-")[1], 10);
      // Check if the item is already in the array
      const index = selectedItems.indexOf(itemId);
      if (this.checked && index === -1) {
        // Add the item ID to the array
        selectedItems.push(itemId);
      } else if (!this.checked && index !== -1) {
        // Remove the item ID from the array
        selectedItems.splice(index, 1);
      }
      // Call deleteItem with the updated array
      // deleteItem();
    });

    // Append elements
    cardBody.appendChild(checkBox);
    cardBody.appendChild(title);
    cardBody.appendChild(text);

    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    // Append card to the container
    cardContainer.querySelector(".row").appendChild(cardDiv);
  });
}
