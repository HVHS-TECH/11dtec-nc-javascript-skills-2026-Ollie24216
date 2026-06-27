
function start() { }



function getFormInput() {
    let name = document.getElementById("nameField").value;
    let enteredChocrating = Number(document.getElementById("chocratingField").value);

   let ratingArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"]



    OUTPUT.innerHTML += "<p>Hello " + name + "</p>";
    OUTPUT.innerHTML += "<p>You have $" + enteredChocrating + " rating </p>";
    OUTPUT.innerHTML += "<p>You have $" + change + " in change after buying a chocolate bar </p>";
    OUTPUT.innerHTML += "<p>+ratingArray[2]</p>";         

    if (enteredChocrating >= price) {
        OUTPUT.innerHTML += "<p>You can buy a chocolate bar!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change.toFixed(2) + " change</p>";
    } else {
        OUTPUT.innerHTML += "<p>You can't afford the chocolate bar.</p>";
    }
}
