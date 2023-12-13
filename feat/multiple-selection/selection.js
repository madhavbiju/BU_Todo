let buttonAdd = document.getElementById("addButton");

function changeAdd() {
  globalThis.checkboxes = document.querySelectorAll(
    'input[id="checkbox"]:checked'
  );

  console.log(checkboxes);

  // Check if there is at least one checkbox checked
  if (checkboxes.length > 0) {
    // buttonAdd.textContent = "Delete";
    // document.querySelector("");
    console.log(checkboxes);
    document.querySelector("#deleteButton").removeAttribute("disabled");
    document.querySelector("#editButton").removeAttribute("disabled");
    // document.querySelector(".multi-select").style.display = "block";
    // buttonAdd.onclick = "";
    if (checkboxes.length == 1) {
      console.log(checkboxes.length);
      console.log("test");
      document.querySelector("#editButton").removeAttribute("disabled");
    } else {
      document
        .querySelector("#editButton")
        .setAttribute("disabled", "disabled");
    }
  } else {
    // Set the button text to its original state if no checkboxes are checked
    document
      .querySelector("#deleteButton")
      .setAttribute("disabled", "disabled");
    document.querySelector("#editButton").setAttribute("disabled", "disabled");

    // document.querySelector(".multi-select").style.display = "none";
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
    document.querySelector("#deleteButton").removeAttribute("disabled");
  } else {
    deselectAll();
    document
      .querySelector("#deleteButton")
      .setAttribute("disabled", "disabled");
  }
}
