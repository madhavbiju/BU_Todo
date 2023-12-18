// Get the search parameter from the URL
const urlSearchParams = new URLSearchParams(window.location.search);
const searchParam = urlSearchParams.get("search");

// Set the search input value to the extracted search parameter
document.getElementById("searchInput").value = searchParam;
// Call the createCards function to filter cards based on the search parameter
getSearchParam(searchParam);

function submitForm() {
  // Simulate pressing the Enter key
  document.querySelector(".searchbox").submit();
}
