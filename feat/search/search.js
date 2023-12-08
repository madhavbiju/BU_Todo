function searchItem() {
  var form = document.querySelector(".searchbox");
  var formData = new FormData(form);
  inputData = formData.get("search");
  localStorage.setItem("searchInputs", inputData);
  //   location.reload();
//   console.log(localStorage.getItem("searchInputs"));
}

var searchInput = document.getElementById("search");
searchInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Tab"
    searchItem();
  }
});
