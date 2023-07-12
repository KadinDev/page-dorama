/*
window.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audio-player');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const icon = document.getElementById('icon');

  // Iniciar a reprodução automática do áudio ao carregar a página
  audioPlayer.play();
  icon.textContent = 'stop_circle';

  playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      icon.textContent = 'stop_circle';
    } else {
      audioPlayer.pause();
      icon.textContent = 'play_arrow';
    }
  });
});
*/

window.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audio-player');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const icon = document.getElementById('icon');

  playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      icon.textContent = 'stop_circle';
    } else {
      audioPlayer.pause();
      icon.textContent = 'play_arrow';
    }
  });
});

