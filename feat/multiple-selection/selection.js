let buttonAdd = document.getElementById("chat-open-button");

function changeAdd() {
  globalThis.checkboxes = document.querySelectorAll(
    'input[id="checkbox"]:checked'
  );

  // Check if there is at least one checkbox checked
  if (checkboxes.length > 0) {
    buttonAdd.textContent = "Delete";
    console.log(checkboxes);
    buttonAdd.onclick = "";
  } else {
    // Set the button text to its original state if no checkboxes are checked
    buttonAdd.textContent = "Add";
    buttonAdd.onclick = buttonClickOn(); // Replace "originalText" with the actual original text
  }
}

//multiple delete button
checkboxes.forEach((item) => {
  console.log(item);
  console.log("test");
});
