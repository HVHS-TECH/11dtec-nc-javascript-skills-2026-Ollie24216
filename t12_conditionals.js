// Variables
let Username = "Ollie";
let year = 2025;
let age = 15;
let money = 2;

let birthYear = year - age;
let oldAge = age + 10;
let halfMoney = money / 2;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function start() {

  OUTPUT.innerHTML = "";

  OUTPUT.innerHTML += "<p>Hi " + Username + ", as of " + year + " you are " + age + " years old.</p>";

  OUTPUT.innerHTML += "<p>You were born in " + birthYear + ".</p>";

  OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + ".</p>";

  OUTPUT.innerHTML += "<p>You have " + money + " pounds.</p>";

  OUTPUT.innerHTML += "<p>Half your money is " + halfMoney + " pounds.</p>";

  displayWelcome("Ollie", 15);
  displayWelcome("Ollie", 15);
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

function addPocketMoney() {

  let extraMoney = Number(document.getElementById("moneyField").value);

  money = money + extraMoney;

  OUTPUT.innerHTML += "<p>You received " + extraMoney + " pounds.</p>";
  OUTPUT.innerHTML += "<p>You now have " + money + " pounds.</p>";
