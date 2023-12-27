// add button on click
editModalOn = () => {
  document.getElementById("edit-wrapper").style.display = "block";
  // document.getElementById("actionButton").style.display = "none";
  let checkbox = document.querySelectorAll("input.checkboxes:checked");
  // console.log(checkbox[0].id);
  console.log(document.querySelectorAll("input.checkboxes:checked")[0].id);
  console.log(checkbox[0].nextSibling.textContent);

  document
    .getElementById("editTitle")
    .setAttribute("value", checkbox[0].nextSibling.textContent);
  nextSibling = checkbox[0].nextSibling;
  console.log(nextSibling);
  console.log(nextSibling.nextSibling.textContent);
  document.getElementById("edit-description").textContent =
    nextSibling.nextSibling.textContent;
  // .setAttribute("value", nextSibling.nextSibling.textContent);
};

// add button off click
editModalOff = () => {
  document.getElementById("edit-wrapper").style.display = "none";
  // document.getElementById("actionButton").style.display = "block";
};

//adding list in todo

// addItem = () => {
//   var form = document.getElementById("form");
//   var formData = new FormData(form);
//   addObject(formData.get("title"), formData.get("description"));
// };

// title validation  active only when title is inputed
// $("input[id='title']").on("keyup", function () {
//   if ($(this).val() != "") {
//     $("button[id='add']").removeAttr("disabled");
//   }
// });

//background blur when modal open

// backgroundBlurOn = () => {
//   document.querySelector(".searchbox").style.filter = "blur(8px)";
//   // document.querySelectorAll(".card").style.filter = "blur(8px)";

//   var els = document.querySelectorAll(".card");
//   for (var x = 0; x < els.length; x++) els[x].style.filter = "blur(8px)";
// };
// backgroundBlurOff = () => {
//   document.querySelector(".searchbox").style.filter = "none";
//   // document.querySelectorAll(".card").style.filter = "blur(8px)";

//   var els = document.querySelectorAll(".card");
//   for (var x = 0; x < els.length; x++) els[x].style.filter = "none";
// };
function enableEditButton() {
  if (document.querySelectorAll("input.checkboxes:checked").length == 1) {
    document.getElementById("editButton").removeAttribute("disabled");
  } else {
    document.getElementById("editButton").setAttribute("disabled", "disabled");
  }
}

function editItem() {
  var form = document.getElementById("edit-form");
  var formData = new FormData(form);
  // if (formData == null) {
  //   formData = "";
  // }
  editObject(formData.get("title"), formData.get("description"));
}
