document.addEventListener("DOMContentLoaded", () => {
  // Najdi všechny hlášky (voice-line)
  const voiceLines = document.querySelectorAll(".voice-line");

  voiceLines.forEach(line => {
    // Získat cestu k audio souboru
    const audioSrc = line.getAttribute("data-audio");
    // Vytvořit Audio objekt
    const audio = new Audio(audioSrc);

    // Najít ikonky a tlačítko
    const playIcon = line.querySelector(".play-icon");
    const pauseIcon = line.querySelector(".pause-icon");
    const button = line.querySelector(".voice-button");

    // Stav přehrávání
    let isPlaying = false;

    // Kliknutí na tlačítko
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

    // Po skončení audia reset ikon
    audio.addEventListener("ended", () => {
      isPlaying = false;
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    });
  });
});
