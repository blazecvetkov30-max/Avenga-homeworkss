function createAnimal() {

    let name = document.getElementById("animalName").value;
    let kind = document.getElementById("animalKind").value;
    let message = document.getElementById("animalMessage").value;

    let animal = {
        name: name,
        kind: kind,
        speak: function(text) {
            console.log(this.kind + " says: " + text);
        }
    };
    animal.speak(message);
}