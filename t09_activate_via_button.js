/*****************************/
// Variables
let Username = "Ollie";
let year = 2025;
let age = 15;
let money = 2;

let birthYear;
let oldAge;
let halfMoney;

oldAge = age + 10;
birthYear = year - age;
halfMoney = money / 2;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/*****************************
 Main code
*****************************/

function startProgram() {
  OUTPUT.innerHTML = "";

  OUTPUT.innerHTML += "<p>Hi " + Username + ", as of " + year + " you are " + age + " years old.</p>";
  OUTPUT.innerHTML += "<p>You were born in " + birthYear + ".</p>";
  OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + ".</p>";
  OUTPUT.innerHTML += "<p>You have " + money + " pounds.</p>";
  OUTPUT.innerHTML += "<p>Half your money is " + halfMoney + " pounds.</p>";
}

/******************************
 Functions
******************************/


   