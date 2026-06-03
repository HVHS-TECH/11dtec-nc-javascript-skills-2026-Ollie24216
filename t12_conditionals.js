// Variables
let Username = "Ollie";
let year = 2025;
let age = 15;
let pocketmoney = 3;
let money = 2;

let birthYear = year - age;
let oldAge = age + 10;
let halfMoney = money / 2;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// Main function
function start() {
  // You can call your functions here when the page loads
}

// Function with parameters
function displayWelcome(_name, _money) {
  OUTPUT.innerHTML += "<p>Welcome to the page " + _name + "</p>";
  OUTPUT.innerHTML += "<p>You have $" + _money + " in pocket money</p>";
}

// Single, combined Form input function
function getFormInput() {
  // 1. Get the values from the input fields
  let name = document.getElementById("nameField").value;
  
  // 2. Use Number() to convert the text input into a real number
  let enteredPocketmoney = Number(document.getElementById("pocketmoneyField").value);

  // 3. Print the standard welcome messages
  OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
  OUTPUT.innerHTML += "<p>You have $" + enteredPocketmoney + " money </p>";

  // 4. The conditional check using the converted number
  if (enteredPocketmoney >= 4) {
    OUTPUT.innerHTML += "<p>You can afford a chocolate bar!</p>";
  } else {
    OUTPUT.innerHTML += "<p>You do not have enough money for a chocolate bar.</p>";
  }
}

