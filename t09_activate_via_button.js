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


OUTPUT.innerHTML += "<p>Hi " + Username + ", as of " + year + " you are " + age + " years old.</p>";

OUTPUT.innerHTML += "<p>You were born in " + birthYear + ".</p>";

OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + ".</p>";

OUTPUT.innerHTML += "<p>You have " + money + " pounds.</p>";

OUTPUT.innerHTML += "<p>Half your money is " + halfMoney + " pounds.</p>";

/******************************
 Functions
******************************/


function start() {

    spaceForJavaScriptOutput.innerHTML
    spaceForJavaScriptOutput.innerHTML

    answer = currentYear - userAge;

    spaceForJavaScriptOutput.innerHTML
}

 function Start() {
    // Add a line to the html page
    OUTPUT.innerHTML += "<p>Less code matters</p>";
}
function displayWelcome(_name, _age){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}
displayWelcome("Ms Alice", 16);
  displayWelcome("Mr Bob", 99);