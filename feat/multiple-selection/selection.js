const { describe } = require("node:test");

function enableDeleteButton() {
  globalThis.checkboxes = document.querySelectorAll("input.checkboxes:checked");

  console.log(checkboxes);
  if (checkboxes.length > 0) {
    document.getElementById("deleteButton").removeAttribute("disabled");
  } else {
    document
      .getElementById("deleteButton")
      .setAttribute("disabled", "disabled");
  }
}
function selectAll() {
  checkboxes = document.querySelectorAll(".checkboxes");
  console.log(checkboxes);
  checkboxes.forEach((item) => {
    item.checked = true;
  });
  // deSelectButton.style.display = "block";
}
function deSelectAll() {
  checkboxes = document.querySelectorAll(".checkboxes");
  checkboxes.forEach((item) => {
    item.checked = false;
  });
  deSelectButton.style.display = "none";
}

function selectOrDeselect() {
  let selectButton = document.getElementById("selectButton");
  if (selectButton.checked) {
    selectAll();
    document.querySelector("#deleteButton").removeAttribute("disabled");
  } else {
    deSelectAll();
  }
}

function selectAllDisable() {
  let checkBoxChecked = document.querySelectorAll("input.checkboxes:checked");
  let checkBoxAll = document.querySelectorAll("input.checkboxes");
  if (checkBoxAll.length > checkBoxChecked.length) {
    document.getElementById("selectButton").checked = false;
  } else if ((checkBoxAll.length = checkBoxChecked.length)) {
    document.getElementById("selectButton").checked = true;
  }
}
