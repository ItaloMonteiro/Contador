currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function aumentar(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function diminuir(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}