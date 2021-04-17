document.addEventListener('DOMContentLoaded', function(event) {

    setTimeout(() => wordRotation(), 500);
    })

    let possibleWords = ['Code','Learn','Contribute','Work','Design','Engineer','Problem-Solve'];
    let element = document.getElementById('adjective');
    let wordIndex = 0;
    let counter = 0;
    let staticDelay = 1000;
    let randomize = false;
    

    function wordRotation() {
        let delay = staticDelay;
        if (randomize) {
            delay = staticDelay / 15;
            counter++;
        }
        changeWord();
        if (counter > 10) {
            counter = 0;
            randomize = false;
            delay = staticDelay * 15;
        } else {
            randomize = true;
            delay = staticDelay / 15;
        }
        setTimeout(() => {
            wordRotation()
        },delay);
    }

    function changeWord() {
        document.getElementById('changingWord').innerHTML = possibleWords[wordIndex++%possibleWords.length];
    }