function valuidateNumber(value) {
    return !isNaN(value) && value !== "";
}

function sumNumbers(numbersArray) {

    var sum = 0;

    for (var i = 0; i < numbersArray.length; i++) {
        if (!valuidateNumber(numbersArray[i])) {
            return "Error: Please enter only valid numbers.";
        }
        sum += Number(numbersArray[i]);
    }
    return sum;
}

function calculateSum() {
    var numbers = [
        document.getElementById('num1').value,
        document.getElementById('num2').value,
        document.getElementById('num3').value,
        document.getElementById('num4').value,
        document.getElementById('num5').value
    ];

    var result = sumNumbers(numbers);

    document.getElementById('result').innerHTML = result;

    console.log(result)
}
