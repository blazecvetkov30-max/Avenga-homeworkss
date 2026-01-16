const paragraph = document.querySelector("p");

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].innerText = "This paragraph text was changed with JavaScript!";
}

const header = document.querySelector("h1, h2");

for (let i = 0; i < header.length; i++) {
    header[i].innerText = "This header text was changed with JavaScript!";
}   