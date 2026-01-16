const number =[2, 4, 5];

const list = document.getElementById("numberList");
const sumParagraph = document.getElementById("sumResult");
const equationParagraph = document.getElementById("equationResult");

const sum = 0;
const equation = "";

for (let i = 0; i < number.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = number[i];
    list.appendChild(listItem);

    sum += number[i];

    equation += number[i];
    if (i < number.length - 1) {
        equation += " + ";
    }
}

sumParagraph.innerText = "Sum: " + sum;
equationParagraph.innerText =  equation + " = " + sum;
