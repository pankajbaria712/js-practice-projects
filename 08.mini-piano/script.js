// Custom Cursor
let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function (dets) {
  //   console.log(dets.x, dets.y);
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
});

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    let note = key.dataset.note; // e.g., "C#3"
    playSound(note); // function to play sound
    animateKey(key); // function to animate key
  });
});

function playSound(note) {
  let audio = new Audio(`./sounds/${note}.mp3`);
  audio.currentTime = 0; // so sound plays instantly even if repeated
  audio.play();
}

function animateKey(key) {
  key.classList.add("active");
  setTimeout(() => key.classList.remove("active"), 150);
}
