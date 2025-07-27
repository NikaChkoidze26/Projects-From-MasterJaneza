let images = [
    "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434",
    "https://static.vecteezy.com/system/resources/previews/003/027/376/non_2x/fire-flames-on-abstract-art-black-background-photo.jpg",
    "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",
    "https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVwYWwlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D"
  ];

  let current = 0;

  let bg = document.getElementById("bg");
  let mainImage = document.getElementById("mainImage");

  function updateSlider() {
    const url = images[current] + "?auto=format&fit=crop&w=1200&q=80";
    bg.style.backgroundImage = `url('${url}')`;
    mainImage.src = url;
  }

  function nextSlide() {
    current = (current + 1) % images.length;
    updateSlider();
  }

  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    updateSlider();
  }

  updateSlider();