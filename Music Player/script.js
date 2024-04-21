let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')

// this function ensures that when the metadata of the audio file is loaded, the progress bar is appropriately initialized to reflect the total duration of the audio file and its current playback position.
song.onloadedmetadata = function() {
    progress.max = song.ondurationchange;
    progress.value = song.currentTime;
}

function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")

    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
    }
}

if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 1000)
}

progress.onchange = function() {
    song.play();
    song.currentTime= progress.value;
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
}