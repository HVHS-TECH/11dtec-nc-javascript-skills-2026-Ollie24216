
/******************************
 Name of task:
 ******************************/
let OUTPUT = document.getElementById("output");
//Variables
let Username = "Ollie";
let year = 2025;
let age = 15;
let money = 2;
let birthYear
let oldAge
oldAge = age + 10;
birthYear = year - age;
halfMoney = money / 2;

/******************************
 Main code
 
 ******************************/
OUTPUT.innerHTML += ("<p>" + "hi " + Username + " as of " + year + " you are " + age + " years old." + "</p>")
OUTPUT.innerHTML += ("<p>" + "you were born in " + birthYear + "</p>")
OUTPUT.innerHTML += ("<p>" + "in 10 years you will be " + oldAge + "</p>")
OUTPUT.innerHTML += ("<p>" + "you have " + halfMoney + " pounds" + "</p>")
OUTPUT.innerHTML += ("<p>" + "you have " + money + " pounds" + "</p>")

/******************************
 Functions
 ******************************/




