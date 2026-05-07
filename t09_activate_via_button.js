
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
writeLine();
OUTPUT.innerHTML += ("<p>hi " + Username + " as of " + year + " you are " + age + " years old.</p>");
OUTPUT.innerHTML += ("<p>you were born in " + birthYear + "</p>");
OUTPUT.innerHTML += ("<p>in 10 years you will be " + oldAge + "</p>");
OUTPUT.innerHTML += ("<p>you have " + halfMoney + " pounds</p>");
OUTPUT.innerHTML += ("<p>you have " + money + " pounds</p>");

/******************************
 Functions
 ******************************/

 function writeLine() {
    // Add a line to the html page
    OUTPUT.innerHTML += "<p>Less code matters</p>";
}
function displayWelcome(_name, _age){
  OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
  OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}
displayWelcome("Ms Alice", 16);
  displayWelcome("Mr Bob", 99);

  <button onClick="start()">START</button>