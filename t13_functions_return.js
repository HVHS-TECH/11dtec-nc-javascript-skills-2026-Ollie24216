let Username = "Ollie";
let pocketmoney = 3;
let money = 12;

let price = 4;
let change = 1;
let OUTPUT = document.getElementById("spaceForJavaScriptOutput");


function calculateChange(enteredPocketmoney, price) {
    let change = enteredPocketmoney - price;
    return change;
}

function getFormInput( {
    let name = document.getElementById("nameField").value;
    let enteredPocketmoney = Number(document.getElementById("pocketmoneyField").value);)
    let change = Number(document.getElementById("change").value);)
    //let change = calculateChange(enteredpocketmoney, chocPrice);
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