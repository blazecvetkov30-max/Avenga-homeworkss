function HumanToDogAge(humanyears) {

    let dogyears = humanyears * 7;

    console.log(humanyears + " human years = " + dogyears + " dog years.")

    return dogyears;
}

function DogToHumanAge(dogyears) {

    let humanyears = dogyears / 7;

    console.log(dogyears + " dog years = " + humanyears + " human years.")

    return humanyears;
}

HumanToDogAge(5);
HumanToDogAge(10);

DogToHumanAge(35);
DogToHumanAge(70);