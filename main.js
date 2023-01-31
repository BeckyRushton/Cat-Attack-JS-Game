import catDeck from "./deck.js";
const catDeckAll = document.querySelector(".catDeckAll");
const computerCard = document.querySelector(".catCardComputer__card");
const userCard = document.querySelector(".catCardUser__card");

// This function creates a card using the data from the cat deck
const makeCard = (catCharacters) => {
  const cardHTML = `<div class="catCard">
  <img class="catCard__image" src=${catCharacters.image} alt="image of ${catCharacters.name}" /> 
  <div class="catCard__stats">
  <p>Name: ${catCharacters.name}</p>
  <p>Cuteness: ${catCharacters.cuteness}</p>
  <p>Stealth: ${catCharacters.stealth}</p>
  <p>Agility: ${catCharacters.agility}</p>
  </div>
  </div>`;
  return cardHTML;
};

// This function populates the card onto the page -- currently set to all
const populatePage = () => {
  catDeckAll.innerHTML = catDeck
    .map((character) => makeCard(character))
    .join("");
};
populatePage();
