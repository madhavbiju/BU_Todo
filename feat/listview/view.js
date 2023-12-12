let todo1Array = JSON.parse(localStorage.getItem("todoArray")) || [];
function createCards(searchValue) {
  let cardContainer = document.querySelector("#cardContainer");

  // Clear existing cards
  cardContainer.querySelector(".row").innerHTML = "";
  if (searchValue === null) {
    searchValue = "";
  } else {
    searchValue = searchParam.toLowerCase();
  }

  todo1Array.forEach((obj, index) => {
    // Check if the title contains the search value
    if (obj.title.toLowerCase().includes(searchValue) || searchValue === "") {
      // Create card element
      let cardDiv = document.createElement("div");
      cardDiv.className = "col-md-3 mb-4";

      let card = document.createElement("div");
      card.className = "card border border-0";

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // Add title
      let title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = obj.title;

      // Add text
      let text = document.createElement("p");
      text.className = "card-text";
      text.textContent = obj.description;

      //single delete button
      let deleteButton = document.createElement("i");
      deleteButton.className = "fa-solid fa-trash";
      deleteButton.style.cursor = "pointer";
      deleteButton.onclick = function () {
        deleteObject(title.textContent);
      };

      var hr = document.createElement("hr");
      hr.className = "dotted-hr";

      //check box
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("id", "checkbox");
      checkBox.addEventListener("change", function () {
        // if (this.checked) {
        changeAdd();
        // }
        // else {
        //     changeEdit();
        //   }
      });

      // Append elements
      cardBody.appendChild(checkBox);
      cardBody.appendChild(title);
      cardBody.appendChild(hr);
      cardBody.appendChild(text);
      cardBody.appendChild(deleteButton);

      card.appendChild(cardBody);
      cardDiv.appendChild(card);

      // Append card to the container
      cardContainer.querySelector(".row").appendChild(cardDiv);
    }
  });
}

// Call the function to create cards initially
createCards();
