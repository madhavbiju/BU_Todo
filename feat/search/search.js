// Get the search parameter from the URL
const urlSearchParams = new URLSearchParams(window.location.search);
const searchParam = urlSearchParams.get("search");

// Set the search input value to the extracted search parameter
document.getElementById("searchInput").value = searchParam;
// Call the createCards function to filter cards based on the search parameter
createCards(searchParam);
