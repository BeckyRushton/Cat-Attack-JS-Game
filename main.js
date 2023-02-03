import catDeck from "./deck.js";
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
const userScoreDisplay = document.querySelector(".scores__user");
const computerScoreDisplay = document.querySelector(".scores__computer");
const jsConfetti = new JSConfetti();

//  Global variables
let cardSelected = false;
let userCardObj = null;
let computerCardObj = null;
let userScore = 0;
let computerScore = 0;

// Function that creates a card for the game
// input: catcharacters (type = object)
// output: html string
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

// Function that pulls a random card from the deck (array) for user and computer
// If user already chose a card, it doesn't allow them to choose another until next round
// Computer cannot choose the same card as it has been removed from the array
const handleChooseCard = () => {
  if (cardSelected) {
    return false;
  }

  const randomCardUser = catDeck[(Math.random() * catDeck.length) | 0];
  userCardObj = randomCardUser;
  userCard.innerHTML = makeCard(randomCardUser);

  const newCatDeck = catDeck.filter((cat) => {
    if (cat.name === randomCardUser.name) {
      return false;
    } else {
      return true;
    }
  });
  const randomCardComputer =
    newCatDeck[(Math.random() * (catDeck.length - 1)) | 0];

  computerCardObj = randomCardComputer;
  cardSelected = true;
};

// Function that checks which method has been checked for comparison in next function
// Only allows the user to check one box at a time
const handleSelectAttack = (event) => {
  const attackMethod = event.target;
  cutenessCheckBox.checked = false;
  stealthCheckBox.checked = false;
  agilityCheckBox.checked = false;
  attackMethod.checked = true;
};

// Function that resets the game table to the default html and no card or method selection
const returnToDefault = () => {
  resultMessageWinner.innerText = "";
  resultMessageDraw.innerText = "";
  resultMessageLoser.innerText = "";
  userCard.innerText = "Click to choose a card";
  userCardObj = null;
  computerCard.innerText = "Cat Attack";
  computerCardObj = null;
  cardSelected = false;
  computerText.innerText = "Computer is waiting...";
  cutenessCheckBox.checked = false;
  stealthCheckBox.checked = false;
  agilityCheckBox.checked = false;
  duelButton.innerText = "Duel";
};

// Function that looks at the button and either:
// - Compares method numbers and outputs result for winner/draw/loser
// - Resets to default without removing scores for new round
// - Resets to default for everything for new game
// This function also sends out two alerts that must be addressed before user can duel:
// - If no card is selected
// - If no method of attack is selected
const handleDuel = () => {
  if (duelButton.innerText === "Next Round") {
    returnToDefault();
    return true;
  }
  if (duelButton.innerText === "New Game") {
    returnToDefault();
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerText = "Score: " + userScore;
    computerScoreDisplay.innerText = "Score: " + computerScore;
    return true;
  }

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

  computerCard.innerHTML = makeCard(computerCardObj);

  if (userCardObj[method] > computerCardObj[method]) {
    computerText.innerText = "I'll get you next time!";
    resultMessageWinner.innerText = "Winner!";
    userScore = userScore + 1;
    userScoreDisplay.innerText = "Score: " + userScore;
  } else if (userCardObj[method] == computerCardObj[method]) {
    computerText.innerText = "Good, but not good enough!";
    resultMessageDraw.innerText = "It's a draw...";
  } else {
    computerText.innerText = "Mwhahahaha!";
    resultMessageLoser.innerText = "Loser!";
    computerScore = computerScore + 1;
    computerScoreDisplay.innerText = "Score: " + computerScore;
  }
  duelButton.innerText = "Next Round";

  if (userScore == 5 || computerScore == 5) {
    duelButton.innerText = "New Game";
  }
  if (userScore == 5) {
    resultMessageWinner.innerText = "Congratulations, you won!";
    jsConfetti.addConfetti({
      confettiRadius: 50,
      emojis: ["🎉", "🐱", "✨", "💸", "🐾"],
      emojiSize: 50,
      confettiNumber: 150,
    });
  } else if (computerScore == 5) {
    resultMessageLoser.innerText = "Better luck next time!";
    jsConfetti.addConfetti({
      confettiRadius: 20,
      emojis: ["😭", "👎", "💔", "😼", "❌"],
      emojiSize: 50,
      confettiNumber: 150,
    });
  }
};

// Event listeners for interactive components
cutenessCheckBox.addEventListener("click", handleSelectAttack);
stealthCheckBox.addEventListener("click", handleSelectAttack);
agilityCheckBox.addEventListener("click", handleSelectAttack);
userCard.addEventListener("click", handleChooseCard);
duelButton.addEventListener("click", handleDuel);
