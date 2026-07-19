
function start() { }



function getFormInput() {

    let BottleNumber = Number(document.getElementById("BottleNumberField").value);   
    OUTPUT.innerHTML += "<p>" + ratingArray[enteredChocrating] + "</p>";         


    for (let i = BottleNumber; i > 0; i = i--) {
    console.log("Current count: " + i);
}
    
}
