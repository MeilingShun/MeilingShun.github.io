const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
const skipBtns = document.querySelectorAll("[data-skip]");
const fullScreenButton = document.querySelector(".fullscreen-button");
const volumeButton = document.querySelector(".volume-button");

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    volumeButton.textContent = "🔊"; // Change to the unmute icon
  } else {
    video.muted = true;
    volumeButton.textContent = "🚫"; // Change to the mute icon
  }
}

volumeButton.addEventListener("click", toggleMute);



function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updateToggleButton() {
  toggleButton.innerHTML = video.paused ? "►" : "❚ ❚";
}

function handleProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercentage}%`;
  updateVideoTime();

}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleSliderUpdate() {
  video[this.name] = this.value;
}

function handleSkip() {
  video.currentTime += +this.dataset.skip;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Update the video time display
function updateVideoTime() {
  const currentTime = formatTime(video.currentTime);
  const duration = formatTime(video.duration);
  const timeDisplay = `${currentTime} / ${duration}`;
  const videoTimeElement = document.querySelector('.video-time');
  if (videoTimeElement) {
    videoTimeElement.textContent = timeDisplay;
  }
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
video.addEventListener("timeupdate", handleProgress);

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});

skipBtns.forEach((btn) => {
  btn.addEventListener("click", handleSkip);
});

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mouseup", () => (mousedown = false));

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") togglePlay();
});

fullScreenButton.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome, Safari, and Opera
  }
});

document.addEventListener("fullscreenchange", updateControlsVisibility);
document.addEventListener("mozfullscreenchange", updateControlsVisibility);
document.addEventListener("webkitfullscreenchange", updateControlsVisibility);







