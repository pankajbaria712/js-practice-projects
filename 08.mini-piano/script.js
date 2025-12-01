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

// Keyboard support
const keyMap = {
  a: "C1",
  1: "C2",
  b: "Ds1",
  2: "Ds2",
  c: "fs3",
  d: "Fs1",
  3: "Fs2",
  e: "A0",
  4: "C3",
  f: "A3",
  5: "A0",
  p: "Ds6",
  q: "C3",
  6: "C4",
  r: "Ds3",
  7: "Ds4",
  s: "fs4",
  w: "Fs6",
  8: "Fs5",
  t: "Ds5",
  9: "Ds6",
  y: "A4",
  10: "A1",
  u: "A7",
};

document.addEventListener("keydown", (e) => {
  const note = keyMap[e.key.toLowerCase()];
  if (!note) return;

  // Play sound
  playSound(note);

  // Animate the key
  const keyEl = document.querySelector(`[data-note="${note}"]`);
  if (keyEl) animateKey(keyEl);
});
