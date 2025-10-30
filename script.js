const nugget = document.getElementById('nugget');
const sound = document.getElementById('nuggetSound');

nugget.addEventListener('click', () => {
  sound.currentTime = 0; // restart if already playing
  sound.play();
});
