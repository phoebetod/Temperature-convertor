
const inputTemp = document.getElementById("inputTemp");
const btn = document.getElementById('btnGo');


function buttonClicked() {
    let answer;
    let inputUnit;

    if (document.getElementById('f').checked) {
        inputUnit = "f";
      }
    
    if (document.getElementById('c').checked) {
        inputUnit = "c";
     }

    if (inputUnit === "f") {
       answer = (5/9)*(inputTemp.value-32)
    }

    if (inputUnit === "c") {
       answer = inputTemp.value*9/5+32
    }

    alert("Your converted temperature is " + answer);
 }

btn.addEventListener('click', buttonClicked);