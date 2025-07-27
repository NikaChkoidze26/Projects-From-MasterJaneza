function playSound(soundName) {
  let audio = new Audio(`sounds/${soundName}.mp3`);
  audio.play();
}
