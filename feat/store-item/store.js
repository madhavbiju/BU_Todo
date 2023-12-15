// Initialize the array by retrieving it from local storage, if available
let todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

// Function to add a new object to the array and update local storage
function addObject(title, description) {
  let newObject = {
    title: title,
    description: description,
  };

  // Post data to the API
  fetch("http://localhost:3000/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      // Optionally, you can perform additional actions after successful addition
      console.log("Object added successfully");
    })
    .catch((error) => {
      console.error("Error adding object:", error);
    });
}

// Function to delete an object from the array based on the title and update local storage
function deleteObject(title) {
  if (confirm("Do you want to continue")) {
    todoArray = todoArray.filter((obj) => obj.title !== title);
    updateLocalStorage();
    location.reload();
  }
}

// Function to update the local storage with the current array
function updateLocalStorage() {
  localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

function displayObject() {
  console.log(todoArray);
}
