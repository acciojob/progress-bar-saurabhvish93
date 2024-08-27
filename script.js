//your JS code here. If required.
import "./styles.css";

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progressBar = document.getElementById("progress-bar");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; // Tracking the currently Active Circle

next.addEventListener("click", () => {
  ++currentActive;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateProgressBar(); // Keeps the common Logic
});

prev.addEventListener("click", () => {
  --currentActive;
  if (currentActive < 1) {
    currentActive = 1;
  }

  updateProgressBar(); // Keeps the common Logic
});

function updateProgressBar() {
  circles.forEach((circle, currIndex) => {
    if (currIndex < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const progressFill = ((currentActive - 1) / (circles.length - 1)) * 100;
  progressBar.style.width = progressFill + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
