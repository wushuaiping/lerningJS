
function add(number1, number2) {
    console.log(number1);
    return number1 + number2;
}

let number1 = document.getElementById('number1').value;
let number2 = document.getElementById('number2').value;
console.log(number1 + number2);

function cal() {
    document.getElementById('result').innerHTML = add(number1, number2);
}