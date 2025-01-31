function openEnvelope() {
  // Rotate the flap to open
  document.querySelector(".flap").style.transform = "rotateX(180deg)";

  // After animation, reveal the card
  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    document.getElementById("card").classList.remove("hidden");
  }, 500);
}
