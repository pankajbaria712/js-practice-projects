// Mouse Move Counter
const mouseCard = document.querySelector("#card-1 h2");
const spans = mouseCard.querySelectorAll("span");

window.addEventListener("mousemove", (e) => {
  spans[0].textContent = e.clientX;
  spans[1].textContent = e.clientY;
});

// Number Counter
const numberCard = document.querySelector("#card-2 h2");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  numberCard.textContent = count;
});

decBtn.addEventListener("click", () => {
  count--;
  if (count <= 0) numberCard.textContent = 0;
  else numberCard.textContent = count;
});

// Click Counter
const clickCard = document.querySelector("#card-3 h2");
let clickCount = 0;

window.addEventListener("click", () => {
  clickCount++;
  clickCard.textContent = clickCount;
});

// 4) Key-Down Counter

const keyCard = document.querySelector("#card-4 h2");
let keyCount = 0;

window.addEventListener("keydown", () => {
  keyCount++;
  keyCard.textContent = keyCount;
});
