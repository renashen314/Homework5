// Add js here.
//Initialize the video variable and turn off autoplay and turn off looping.
const media = document.querySelector('#videoplayer');
media.preload = 'auto';
media.autoplay == false;
media.loop == false;
media.defaultPlaybackRate = 1;
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const slower = document.querySelector('#slower');
const faster = document.querySelector('#faster');
const skip = document.querySelector('#skip');
const mute = document.querySelector('#mute');

//play
function playVideo() {
    media.play();
};
play.addEventListener('click', playVideo);

//pause
function pauseVideo() {
    media.pause();
};
pause.addEventListener('click', pauseVideo);

/*Slow down the video to the next lowest playback speed from the list: 0.5, 1, 2.
If the video is already on the slowest speed, add an alert saying "Video is at slowest speed!" */
function slowVideo() {
    if (media.playbackRate == 0.5) {
        window.alert('Video is at slowest speed!')
    } else  {
        media.playbackRate *= 0.5;
    }
};
slower.addEventListener('click', slowVideo);

/*Speed up the video to the next highest playback speed from the list: 0.5, 1, 2.
If the video is already on the highest speed, add an alert saying "Video is at fastest speed!" */
function fastVideo() {
    if (media.playbackRate == 2) {
        window.alert('Video is at fastest speed!')
    } else {
        media.playbackRate *= 2;
    }
};
faster.addEventListener('click', fastVideo);

/*Advance the current video by 15 seconds.
If the video length has been exceeded go back to the start of the video.*/
function skipahead() {
    if (media.currentTime < media.duration) {
        media.currentTime += 15; // now it plays at 15s
    } else {
        media.currentTime = 0;
    }
};
skip.addEventListener('click', skipahead);

/*Mute/unmute the video and update the text in the button.*/
function muteVideo() {
    media.muted = !(media.muted);
    if (media.muted == true) {
        mute.innerHTML = 'Unmute'
    } else {
        mute.innerHTML = 'Mute'
    }
};
mute.addEventListener('click', muteVideo);

/* Change the volume based on the slider and update the volume information.*/
const slider = document.querySelector('#slider');
slider.addEventListener('change',() => {
    media.volume = slider.valueAsNumber / 100;
    volume.textContent = `${slider.value}%`;
})
document.querySelector('#volume').innerHTML = media.volume();

media.addEventListener ('ended', function () {
    media.currentTime = 0;
});

