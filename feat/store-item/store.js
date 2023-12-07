// Initialize the array by retrieving it from local storage, if available
let todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

// Function to add a new object to the array and update local storage
function addObject(title, description) {
  let newObject = {
    title: title,
    description: description,
  };

  todoArray.push(newObject);
  updateLocalStorage();
}

// Function to delete an object from the array based on the title and update local storage
function deleteObject(title) {
  let choice = prompt("do you realy want to continue? y/n");
  if (choice == "y") {
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
