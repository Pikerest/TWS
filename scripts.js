document.addEventListener("DOMContentLoaded", () => {
  const voiceLines = document.querySelectorAll(".voice-line");

  voiceLines.forEach(line => {
    const audioSrc = line.getAttribute("data-audio");
    const audio = new Audio(audioSrc);

    const playIcon = line.querySelector(".play-icon");
    const pauseIcon = line.querySelector(".pause-icon");
    const button = line.querySelector(".voice-button");

    let isPlaying = false;

    button.addEventListener("click", () => {
      if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
      } else {
        audio.pause();
        isPlaying = false;
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
      }
    });

    audio.addEventListener("ended", () => {
      isPlaying = false;
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    });
  });
});
