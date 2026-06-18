let Username = "Ollie";
let year = 2025;
let age = 15;
let pocketmoney = 3;
let money = 2;
let birthYear = year - age;
let oldAge = age + 10;
let halfMoney = money / 2;
let price = 4;

let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// functions
function start() { }

function displayWelcome(_name, _money) {
    OUTPUT.innerHTML += "<p>Welcome to the page " + _name + "</p>";
    OUTPUT.innerHTML += "<p>You have $" + _money + " in pocket money</p>";
}

function calculatePay(_hours) {
    // The pay calculation is complex
    // so we hide it in a function
    let pay = _hours * 18.80; // Training wage
    pay = pay - (pay * 0.105); // tax deduction
    pay = pay - (pay * 0.04); // kiwisaver
    pay = pay + 10; // bonus
    return pay;
}

let mondayPay = calculatePay(8);

function calculateChange(_money, _price) {
    let change = _money - _price;
    return change;
}

function getFormInput() {
    let name = document.getElementById("nameField").value;
    let enteredPocketmoney = Number(document.getElementById("pocketmoneyField").value);
}
    OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
    OUTPUT.innerHTML += "<p>You have $" + enteredPocketmoney + " money </p>";
    
    OUTPUT.innerHTML += "<p>You have $" + change + " in change </p>";
    // Assuming the chocolate bar costs $4
    let chocPrice = 4;

    if (enteredPocketmoney >= chocPrice) {
        OUTPUT.innerHTML += "<p>You can buy a chocolate bar!</p>";
        
        let myChange = calculateChange(enteredPocketmoney, chocPrice);
        OUTPUT.innerHTML += "<p>You will get $" + myChange.toFixed(2) + " change</p>";
    } else {
        OUTPUT.innerHTML += "<p>You can't afford the chocolate bar.</p>";  
    }