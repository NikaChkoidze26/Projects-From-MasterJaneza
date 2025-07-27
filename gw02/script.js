let current = 1;
let circles = document.querySelectorAll(".circle");
let progress = document.getElementById("progress");
let next = document.getElementById("next");
let prev = document.getElementById("prev");


function goNext() {
  if (current < circles.length) update(++current);
}

function goPrev() {
  if (current > 1) update(--current);
}

function update(step) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].classList.toggle("active", i < step);
  }

  let percent = ((step - 1) / (circles.length - 1)) * 100;
  progress.style.width = percent + "%";

  prev.disabled = step === 1;
  next.disabled = step === circles.length;
}

console.log(circles.length);