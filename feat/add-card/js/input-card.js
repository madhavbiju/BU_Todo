// add button on click
modalOnButton = () => {
  document.getElementById("card-wrapper").style.display = "block";
  document.getElementById("card-wrapper").style.display = "block";
};

// add button off click
modalOffButton = () => {
  document.getElementById("card-wrapper").style.display = "none";
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
  document.querySelector(".input-group").style.filter = "blur(8px)";
  document.getElementById("floatingbutton1").style.filter = "blur(8px)";
  // document.querySelectorAll(".card").style.filter = "blur(8px)";

  var els = document.querySelectorAll(".card");
  for (var x = 0; x < els.length; x++) els[x].style.filter = "blur(8px)";
};
backgroundBlurOff = () => {
  document.querySelector(".input-group").style.filter = "none";
  document.getElementById("floatingbutton1").style.filter = "none";
  // document.querySelectorAll(".card").style.filter = "blur(8px)";

  var els = document.querySelectorAll(".card");
  for (var x = 0; x < els.length; x++) els[x].style.filter = "none";
};
