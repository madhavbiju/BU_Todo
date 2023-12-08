buttonClickOn = () => {
  document.getElementById("card-wrapper").style.display = "block";
};
buttonClickOff = () => {
  document.getElementById("card-wrapper").style.display = "none";
};

addItem = () => {
  var form = document.getElementById("form");
  var formData = new FormData(form);
  addObject(formData.get("title"), formData.get("description"));
};

$("input[id='title']").on("keyup", function () {
  if ($(this).val() != "") {
    $("button[id='add']").removeAttr("disabled");
  }
});
