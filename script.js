//your JS code here. If required.
//your JS code here. If required.

const sounds = [
  "applause",
  "boom",
  "gasp",
  "tada",
  "victory"
];

const buttons = document.querySelectorAll(".btn");

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

// Create audio elements
sounds.forEach(sound => {

  const audio = document.createElement("audio");

  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;

  document.body.appendChild(audio);
});

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const text = button.innerText.toLowerCase();

    if (text === "stop") {
      stopSongs();
    } else {

      stopSongs();

      document.getElementById(text).play();
    }
  });

});