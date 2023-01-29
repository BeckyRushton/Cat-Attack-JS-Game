import catDeck from "./deck.js";
const catDeckAll = document.querySelector(".catDeckAll");

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

const populatePage = () => {
  catDeckAll.innerHTML = catDeck
    .map((character) => makeCard(character))
    .join("");
};
populatePage();
