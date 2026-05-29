// Variables
let Username = "Ollie";
let year = 2025;
let age = 15;
let money = 2;

let birthYear = year - age;
let oldAge = age + 10;
let halfMoney = money / 2;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// Main function
function start() {

  OUTPUT.innerHTML += "<p>Hi " + Username + ", as of " + year + " you are " + age + " years old.</p>";

  OUTPUT.innerHTML += "<p>You were born in " + birthYear + ".</p>";

  OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + ".</p>";

  OUTPUT.innerHTML += "<p>You have " + money + " pounds.</p>";

  OUTPUT.innerHTML += "<p>Half your money is " + halfMoney + " pounds.</p>";
}

// Function with parameters
function displayWelcome(_name, _age) {
  OUTPUT.innerHTML += "<p>Welcome to the page " + _name + "</p>";
  OUTPUT.innerHTML += "<p>You are " + _age + " years old</p>";
}

// Form input function
function getFormInput() {

  let name = document.getElementById("nameField").value;
  let age = document.getElementById("ageField").value;

  OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
  OUTPUT.innerHTML += "<p>You are " + age + " years old</p>";
}

// Run functions
start();

displayWelcome("Ms Alice", 16);
displayWelcome("Mr Bob", 99);
  