import catDeck from "./deck.js";
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

// Function to populate the user card with a random card from deck array
// Will also need to choose 2 from deck and not populate the computer
// card until duel button is pressed
const handleChooseCard = () => {
  const randomCard = catDeck[(Math.random() * catDeck.length) | 0];
  console.log(randomCard);
  userCard.innerHTML = makeCard(randomCard);
};
userCard.addEventListener("click", handleChooseCard);
