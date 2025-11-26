let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
  let w = 0;
  btn.innerHTML = "Downloading..";
  btn.style.opacity = "70%";
  btn.style.cursor = "not-allowed";
  btn.disabled = true;
  btn.style.scale = "none";

  let start = setInterval(function () {
    w++;
    inner.style.width = w + "%";
    h2.innerHTML = w + "%";

    if (w >= 100) {
      clearInterval(start);
      btn.innerHTML = "Downloaded";
      btn.style.opacity = "1";
    }
  }, 100);
});
