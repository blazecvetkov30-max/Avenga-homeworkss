function printNumbers() { 

    let text = '';

    for (let i = 1; i <= 20; i++) {

        text += i;

        if (i % 2 === 0) {

            text += "\n";   

        } else {

            text += " ";
        }
}
document.getElementById("output").innerText = text;

console.log(text);

}