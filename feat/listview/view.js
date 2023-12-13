let todo1Array = JSON.parse(localStorage.getItem("todoArray")) || [];
function createCards() {
  let cardContainer = document.querySelector("#cardContainer");

  todo1Array.forEach((obj, index) => {
    // Create card element
    let cardDiv = document.createElement("div");
    cardDiv.className = "col-md-6 mb-4";

    let card = document.createElement("div");
    card.className = "card";

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

    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.onclick = function () { deleteObject(title.textContent) };

    // Append elements
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(deleteButton);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    // Append card to the container
    cardContainer.querySelector(".row").appendChild(cardDiv);
  });
}

// Call the function to create cards
createCards();
