let counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  let updateCounter = () => {
    let target = +counter.getAttribute("data-target");
    let current = +counter.innerText;

    let increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10); 
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
