function calculateZodiac() {

    var year = document.getElementById("yearInput").value;

    year = Number(year);

    var zodiacIndex = (year - 4) % 12;

    var zodiacAnimals = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig"
    ];

    var zodiacSign = zodiacAnimals[zodiacIndex];

    document.getElementById("result").innerHTML = "Your Chinese Zodiac is: " + zodiacSign;
}
