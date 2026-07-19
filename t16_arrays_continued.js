
function start() { }



function getFormInput() {

    let enteredChocrating = Number(document.getElementById("chocratingField").value);

   let ratingArray = ["MILK", "Chocolate", "sausages", "CARROTS"]

    
    OUTPUT.innerHTML += "<p>" + ratingArray[enteredChocrating] + "</p>";         

    
}
