function deleteItem(selectedItems) {
  const itemIdsToDelete = selectedItems;
  console.log(JSON.stringify({ itemIds: itemIdsToDelete }));
  fetch("http://localhost:3000/items", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemIds: itemIdsToDelete }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Handle the response from the server
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
  window.location.href = "../index.html";
}
