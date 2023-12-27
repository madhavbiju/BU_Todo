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

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/items"); // Replace with your API endpoint
    globalThis.data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data from the API
fetchData();

//adding list in todo

addItem = () => {
  globalThis.resultsFound = 0;
  var form = document.getElementById("form");
  var formData = new FormData(form);

  // Check if the "description" field is empty or null, and set it to an empty string
  if (
    formData.get("description") == null ||
    formData.get("description").trim() === ""
  ) {
    formData.set("description", "");
  }
  data.forEach((obj, index) => {
    if (obj.title.toLowerCase() === formData.get("title").toLowerCase()) {
      resultsFound = 1;
    }
  });
  if (resultsFound == 1) {
    var element = document.getElementById("a-exists");
    element.style.display = "block";
  } else {
    addObject(formData.get("title"), formData.get("description"));
    location.reload();
  }
};

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
