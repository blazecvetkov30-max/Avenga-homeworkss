function tellStory(storyArray) {

    var name = storyArray[0];
    var mood = storyArray[1];
    var activity = storyArray[2];

    var story =
        "This is " + name + ". " +
        name + " is a nice person. " +
        "Today they are " + mood + ". " +
        "They are " + activity + " all day. " +
        "The end.";

    return story;
}

function createStory() {
    var nameInput = document.getElementById("name").value;
    var moodInput = document.getElementById("mood").value;
    var activityInput = document.getElementById("activity").value;

    var srotyData = [nameInput, moodInput, activityInput];

    var story = tellStory(srotyData);

    document.getElementById("result").innerHTML = story;

    console.log(story);
}

