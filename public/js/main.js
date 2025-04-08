
  const playBtn = document.getElementById('playVideo');
  const closeBtn = document.getElementById('closeVideo');
  const video = document.getElementById('heroVideo');
  const videoContainer = document.getElementById('videoContainer');

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoContainer.classList.add('active');
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    videoContainer.classList.remove('active');
  });
