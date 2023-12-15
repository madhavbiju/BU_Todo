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
  checkboxes = document.querySelectorAll("#checkbox");
  checkboxes.forEach((item) => {
    item.checked = true;
  });
  deSelectButton.style.display = "block";
}
function deSelectAll() {
  checkboxes = document.querySelectorAll("#checkbox");
  checkboxes.forEach((item) => {
    item.checked = false;
  });
  deSelectButton.style.display = "none";
}
