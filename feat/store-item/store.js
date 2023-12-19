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
function deleteObject() {
  let checkboxes = document.querySelectorAll('input[id="checkbox"]:checked');
  // console.log(checkboxes);

  if (confirm("Do you want to continue")) {
    // console.log("check");
    // console.log(checkboxes);
    checkboxes.forEach((item) => {
      console.log("item");
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
function editObject() {
  console.log("edit working");
  let checkboxes = document.querySelectorAll('input[id="checkbox"]:checked');
  // console.log(checkboxes);

  // if (confirm("Do you want to continue")) {
  // console.log("check");
  // console.log(checkboxes);
  // checkboxes.forEach((item) => {
  // console.log("item");
  // console.log(item);
  // console.log(item.nextSibling.textContent);
  // todoArray = todoArray.filter(
  // (obj) => obj.title !== item.nextSibling.textContent
  // );
  // updateLocalStorage();
  // });
  // location.reload();
  // }
}

// Function to update the local storage with the current array
function updateLocalStorage() {
  localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

function displayObject() {
  console.log(todoArray);
}
