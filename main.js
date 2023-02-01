import catDeck from "./deck.js";
const reset = document.querySelector("#resetGame");
const computerCard = document.querySelector(".catCardComputer__card");
const userCard = document.querySelector(".catCardUser__card");
const duelButton = document.querySelector("#duel");
const cutenessCheckBox = document.querySelector("#stat01");
const stealthCheckBox = document.querySelector("#stat02");
const agilityCheckBox = document.querySelector("#stat03");
const computerText = document.querySelector(".computerWaiting");
const resultMessageWinner = document.querySelector(".resultMessage__winner");
const resultMessageDraw = document.querySelector(".resultMessage__draw");
const resultMessageLoser = document.querySelector(".resultMessage__loser");
let cardSelected = false;
let userCardObj = null;
let computerCardObj = null;

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
  if (cardSelected) {
    return false;
  }

  const randomCardUser = catDeck[(Math.random() * catDeck.length) | 0];
  userCardObj = randomCardUser;
  console.log(randomCardUser);
  userCard.innerHTML = makeCard(randomCardUser);

  const newCatDeck = catDeck.filter((cat) => {
    if (cat.name === randomCardUser.name) {
      return false;
    } else {
      return true;
    }
  });
  const randomCardComputer = newCatDeck[(Math.random() * catDeck.length) | 0];
  computerCardObj = randomCardComputer;
  console.log(randomCardComputer);

  cardSelected = true;
};
userCard.addEventListener("click", handleChooseCard);

// Function to check that you've only ticked one box

const handleSelectAttack = (event) => {
  const attackMethod = event.target;
  console.log(attackMethod);

  cutenessCheckBox.checked = false;
  stealthCheckBox.checked = false;
  agilityCheckBox.checked = false;
  attackMethod.checked = true;
};

cutenessCheckBox.addEventListener("click", handleSelectAttack);
stealthCheckBox.addEventListener("click", handleSelectAttack);
agilityCheckBox.addEventListener("click", handleSelectAttack);

// Function to compare the user's chosen attack method with computers stat
const handleDuel = () => {
  if (!cardSelected) {
    alert("Please select your card!");
    return false;
  }
  let method = null;
  if (cutenessCheckBox.checked) {
    method = "cuteness";
  } else if (stealthCheckBox.checked) {
    method = "stealth";
  } else if (agilityCheckBox.checked) {
    method = "agility";
  } else {
    alert("Please choose an attack method!");
    return false;
  }
  console.log(method);
  console.log(userCardObj[method]);
  console.log(computerCardObj[method]);

  computerCard.innerHTML = makeCard(computerCardObj);

  if (userCardObj[method] > computerCardObj[method]) {
    computerText.innerText = "I'll get you next time!";
    resultMessageWinner.innerText = "Winner!";
    console.log("Winner!");
  } else if (userCardObj[method] == computerCardObj[method]) {
    computerText.innerText = "Good, but not good enough!";
    resultMessageDraw.innerText = "It's a draw...";
    console.log("Draw!");
  } else {
    computerText.innerText = "Mwhahahaha!";
    resultMessageLoser.innerText = "Loser!";
    console.log("Loser!");
  }
};

duelButton.addEventListener("click", handleDuel);

// Function to reset game page

// const handleReset = (event) => {
//   const
// cardSelected = false
// };
