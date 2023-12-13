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
function deleteObject() {
  let checkboxes = document.querySelectorAll('input[id="checkbox"]:checked');
  // console.log(checkboxes);

  if (confirm("Do you want to continue")) {
    // console.log("check");
    // console.log(checkboxes);
    checkboxes.forEach((item) => {
      // console.log("item");
      // console.log(item);
      // console.log(item.nextSibling.textContent);
      todoArray = todoArray.filter(
        (obj) => obj.title !== item.nextSibling.textContent
      );
      updateLocalStorage();
    });
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
