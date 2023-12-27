// Get the input element and button
var inputBox = document.getElementById("title");
var submitButton = document.getElementById("add");

// Add input event listener to the input box
inputBox.addEventListener("input", function () {
  // Enable the button if there is input, disable it otherwise
  submitButton.disabled = inputBox.value.trim() === "";
});

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

  // Check if the "description" field is empty or null, and set it to an empty string
  if (
    formData.get("description") == null ||
    formData.get("description").trim() === ""
  ) {
    formData.set("description", "");
  }

  addObject(formData.get("title"), formData.get("description"));
  location.reload();
};

// // title validation  active only when title is inputed
// $("input[id='title']").on("keyup", function () {
//   if ($(this).val() != "") {
//     $("button[id='add']").removeAttr("disabled");
//   }
// });

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
