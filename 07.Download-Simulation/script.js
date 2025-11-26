let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
  let progress = 0;

  // Disable button while "downloading"
  btn.disabled = true;
  btn.innerHTML = "Downloading...";
  btn.style.opacity = "0.6";
  btn.style.cursor = "not-allowed";

  let start = setInterval(() => {
    // random speed between 0.5% to 2.5%
    let randomSpeed = Math.random() * 2 + 0.5;

    // Smooth easing effect
    progress += randomSpeed * (1 - progress / 120);

    if (progress >= 100) {
      progress = 100;
    }

    inner.style.width = progress + "%";
    h2.textContent = Math.floor(progress) + "%";

    // Stop when complete
    if (progress === 100) {
      clearInterval(start);

      // UI reset when finished
      btn.innerHTML = "Downloaded";
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
      btn.disabled = false;
      inner.classList.add("glow");
    }
  }, 80);
});
