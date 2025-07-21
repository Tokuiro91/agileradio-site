const playBtn = document.getElementById("play-btn");
const radio = document.getElementById("radio");
let playing = false;
playBtn.addEventListener("click", () => {
  if (!playing) {
    radio.play();
    playBtn.textContent = "Pause";
  } else {
    radio.pause();
    playBtn.textContent = " Play";
  }
  playing = !playing;
});
