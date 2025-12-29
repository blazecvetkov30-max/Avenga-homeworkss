function showNames() {
    
    let firstNames = ["Toshe", "Kristijan", "Marija", "Jovan", "Ana"];
    let lastNames = ["Todorovski", "Petkovski", "Stanojkovska", "Jovanovski", "Trajkovska"];

    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        fullNames.push((i+1) + ". " + firstNames[i] + " " + lastNames[i]);

    }
    let list = document.getElementById("result");
    list.innerHTML = "";

    for (let i = 0; i < fullNames.length; i++) {
        let li = document.createElement("li");
        li.textContent = fullNames[i];
        list.appendChild(li);
    }   
}