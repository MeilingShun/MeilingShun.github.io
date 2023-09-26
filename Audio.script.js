const Audios = [
  {
    title: 'Otherside',
    artist: 'Red Hot Chili Peppers',
    file: 'otherside.mp3'
  },
];

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const repeatButton = document.getElementById('repeat');


const audio = new Audio();
let currentAudioIndex = 0;
let isPlaying = false;
let isRepeat = false;
function playAudio() {
  const currentAudio = Audios[currentAudioIndex];
  const AudioTitle = document.querySelector('.audio-info h2');
  const AudioArtist = document.querySelector('.audio-info h3');
  const progressBar = document.querySelector('.progress');
  
  audio.src = currentAudio.file;
  AudioTitle.textContent = currentAudio.title;
  AudioArtist.textContent = currentAudio.artist;
  progressBar.style.width = 0;
  
  audio.play();
  isPlaying = true;
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
}


function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatButton.classList.toggle('active');
}


playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
repeatButton.addEventListener('click', toggleRepeat);
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('timeupdate', updateaudioTime);


