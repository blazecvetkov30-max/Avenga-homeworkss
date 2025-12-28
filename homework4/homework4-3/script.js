  function createBigString(arrayOfStrings) {

    let result = "";

    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (i > 0) {
            result += " ";
        }
        result += arrayOfStrings[i];
    }

    return result;
}

function showResult() {
    let words = ["Hello", "there", "students", "of", "SEDC", "!"];
    let finalSentence = createBigString(words);
    document.getElementById("result").innerText = finalSentence;
}



