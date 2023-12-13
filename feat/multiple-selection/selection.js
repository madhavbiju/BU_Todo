let buttonAdd = document.getElementById("actionButton");

function changeAdd() {
  globalThis.checkboxes = document.querySelectorAll(
    'input[id="checkbox"]:checked'
  );

  // console.log(checkboxes);

  // Check if there is at least one checkbox checked
  if (checkboxes.length > 0) {
    buttonAdd.textContent = "Delete";
    console.log(checkboxes);
    document.querySelector(".multi-select").style.display = "block";
    // buttonAdd.onclick = "";
  } else {
    // Set the button text to its original state if no checkboxes are checked
    document.querySelector(".multi-select").style.display = "none";
    buttonAdd.textContent = "Add";
    buttonAdd.onclick = buttonClickOn(); // Replace "originalText" with the actual original text
  }
}

//multiple delete button
checkboxes.forEach((item) => {
  console.log(item);
  console.log("test");
});

function selectAll() {
  // console.log("inside select all");
  // selectALlCheckBox = document.getElementById("selectAllCheckbox");
  // if (selectALlCheckBox.checked == true) {
  checkboxes = document.querySelectorAll("#checkbox");
  // console.log(checkboxes);
  checkboxes.forEach((item) => {
    item.checked = true;
  });
  // }
}
function deselectAll() {
  // console.log("inside select all");
  // selectALlCheckBox = document.getElementById("selectAllCheckbox");
  // if (selectALlCheckBox.checked == false) {
  checkboxes = document.querySelectorAll("#checkbox");
  // console.log(checkboxes);
  checkboxes.forEach((item) => {
    item.checked = false;
  });
  //   }
}

function selectOrDeselect() {
  selectALlCheckBox = document.getElementById("selectAllCheckbox");
  if (selectALlCheckBox.checked == true) {
    selectAll();
  } else {
    deselectAll();
    document.querySelector(".multi-select").style.display = "none";
  }
}
