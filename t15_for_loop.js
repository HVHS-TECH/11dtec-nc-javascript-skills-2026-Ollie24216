
function start() { }



function getFormInput() {

    let enteredChocrating = Number(document.getElementById("chocratingField").value);

   let ratingArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"]

    
    OUTPUT.innerHTML += "<p>" + ratingArray[enteredChocrating] + "</p>";         


    for (let i = 0; i <= 30; i = i + 3) {
    console.log("Current count: " + i);
}
    
}
