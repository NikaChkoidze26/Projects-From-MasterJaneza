let load = 0;
let loadingText = document.querySelector('.loading-text');
let background = document.querySelector('.bg');

let interval = setInterval(() => {
  if (load > 100) {
    clearInterval(interval);
    return;
  }

 
  loadingText.innerText = load + "%";
  loadingText.style.opacity = 1 - load / 100;

  let percent = load / 100;
  let blurAmount = 30 - (30 * percent);
  background.style.filter = `blur(${blurAmount}px)`;

  load++;
}, 30);