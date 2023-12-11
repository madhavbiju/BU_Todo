buttonClickOn = () => {
  document.getElementById("card-wrapper").style.display = "block";
  document.getElementById("chat-open-button").style.display = "none";
};
buttonClickOff = () => {
  document.getElementById("card-wrapper").style.display = "none";
  document.getElementById("chat-open-button").style.display = "block";
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
