let main = document.querySelector("main");
let btn = document.querySelector("button");
let words = [
  "Pankaj",
  "Amit",
  "Anil",
  "Awsaf",
  "Sachin",
  "Kamlesh",
  "Sharthak",
  "Anubhav",
  "Jayesh",
  "Priyanka",
  "Hiral",
  "Hetal",
  "Jayu",
  "Ajay",
  "Keshav",
  "Rahul",
  "Pintu",
  "Mahendra",
  "Parul",
  "Arpit",
  "Akshay",
];
btn.addEventListener("click", () => {
  let div = document.createElement(`div`);

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let r = Math.floor(Math.random() * 100);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let w = Math.floor(Math.random() * words.length);

  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate = r + "deg";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  main.appendChild(div);
  div.innerHTML = words[w];
});
