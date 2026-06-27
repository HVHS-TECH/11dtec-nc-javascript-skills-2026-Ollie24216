
function start() { }



function getFormInput() {
    let name = document.getElementById("nameField").value;
    let enteredChocrating = Number(document.getElementById("chocratingField").value);

   

    let change = calculateChange(enteredPocketmoney, price);

    OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
    OUTPUT.innerHTML += "<p>You have $" + enteredChocrating + " rating </p>";
    OUTPUT.innerHTML += "<p>You have $" + change + " in change after buying a chocolate bar </p>";

    if (enteredPocketmoney >= price) {
        OUTPUT.innerHTML += "<p>You can buy a chocolate bar!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change.toFixed(2) + " change</p>";
    } else {
        OUTPUT.innerHTML += "<p>You can't afford the chocolate bar.</p>";
    }
}
