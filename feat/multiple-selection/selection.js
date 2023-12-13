var selectButton = document.getElementById("selectButton");
var deSelectButton = document.getElementById("deSelectButton");

function changeAdd() {
  globalThis.checkboxes = document.querySelectorAll(
    'input[id="checkbox"]:checked'
  );

  if (checkboxes.length > 0) {
    deSelectButton.style.display = "block";
    selectButton.onclick = deselectAll;
  } else {
    deSelectButton.style.display = "none";
    selectButton.textContent = "Select All";
    selectButton.onclick = buttonClickOn();
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
