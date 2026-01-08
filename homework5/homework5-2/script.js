function showStatus() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const readingStatus = document.getElementById('readingStatus').value === 'true';

    const book = {
        title: title,
        author: author,
        readingStatus: readingStatus,

        getStatus: function() {
            if (this.readingStatus) {
                return "You have already read " + this.title + " by " + this.author + ".";
            } else {
                return "You still need to read " + this.title + " by " + this.author + ".";
            }
        }
    };

    document.getElementById("result").innerText = book.getStatus();
}


