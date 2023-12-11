// add button on click
buttonClickOn = () => {
  document.getElementById("card-wrapper").style.display = "block";
  document.getElementById("chat-open-button").style.display = "none";
};

// add button off click
buttonClickOff = () => {
  document.getElementById("card-wrapper").style.display = "none";
  document.getElementById("chat-open-button").style.display = "block";
};

//adding list in todo

addItem = () => {
  var form = document.getElementById("form");
  var formData = new FormData(form);
  addObject(formData.get("title"), formData.get("description"));
};

// title validation  active only when title is inputed
$("input[id='title']").on("keyup", function () {
  if ($(this).val() != "") {
    $("button[id='add']").removeAttr("disabled");
  }
});

//background blur when modal open

backgroundBlurOn = () => {
  document.querySelector(".searchbox").style.filter = "blur(8px)";
  // document.querySelectorAll(".card").style.filter = "blur(8px)";

  var els = document.querySelectorAll(".card");
  for (var x = 0; x < els.length; x++) els[x].style.filter = "blur(8px)";
};
backgroundBlurOff = () => {
  document.querySelector(".searchbox").style.filter = "none";
  // document.querySelectorAll(".card").style.filter = "blur(8px)";

  var els = document.querySelectorAll(".card");
  for (var x = 0; x < els.length; x++) els[x].style.filter = "none";
};
