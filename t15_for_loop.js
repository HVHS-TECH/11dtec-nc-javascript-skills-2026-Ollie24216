
function start() { }



function getFormInput() {

    let BottleNumber = Number(document.getElementById("BottleNumberField").value);   
    let OUTPUT = document.getElementById("OUTPUT")
    OUTPUT.innerHTML = ""; 


    for (let i = BottleNumber; i > 0; i--) {
    console.log("Current count: " + i)
    let BottleWord = (i === 1) ? "bottle" : "bottles";
        OUTPUT.innerHTML += "<p>" + "There are " + i + " " + BottleWord + " of beer on the wall" + "</p>";         
;

    }
}