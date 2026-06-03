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

}

// Function with parameters
function displayWelcome(_name, _money) {
  OUTPUT.innerHTML += "<p>Welcome to the page " + _name + "</p>";
  OUTPUT.innerHTML += "<p>You have $" + _money + " in pocket money</p>";
}

// Form input function
function getFormInput() {

  let name = document.getElementById("nameField").value;
  let pocketmoney = Number(document.getElementById("pocketmoneyField").value);

  OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
  OUTPUT.innerHTML += "<p>You have " + enteredpocketmoney + " money </p>";
  //OUTPUT.innerHTML += "<p>You have money </p>";
}

//if ("money" < 4) {
//  OUTPUT.innerHTML += "<p>You can afford a chocolate bar! </p>";
//}

if (pocketmoney >= 4) {
OUTPUT.innerHTML += "<p>You have money </p>";
}
