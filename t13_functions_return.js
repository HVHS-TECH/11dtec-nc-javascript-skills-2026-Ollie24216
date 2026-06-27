let Username = "Ollie";

let pocketmoney = 3;
let money = 12;

let price = 4;
let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function start() { }



function calculateChange(enteredPocketmoney, price) {
    let chocPrice = 4;
    let change = enteredPocketmoney - price;
    return change;
}

function getFormInput() {
    let name = document.getElementById("nameField").value;
    let enteredPocketmoney = Number(document.getElementById("pocketmoneyField").value);

   

    let change = calculateChange(enteredPocketmoney, chocPrice);

    OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
    OUTPUT.innerHTML += "<p>You have $" + enteredPocketmoney + " money </p>";
    OUTPUT.innerHTML += "<p>You have $" + change + " in change </p>";

    if (enteredPocketmoney >= chocPrice) {
        OUTPUT.innerHTML += "<p>You can buy a chocolate bar!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change.toFixed(2) + " change</p>";
    } else {
        OUTPUT.innerHTML += "<p>You can't afford the chocolate bar.</p>";
    }
}
