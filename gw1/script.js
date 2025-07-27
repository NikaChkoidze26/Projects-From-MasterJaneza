function expandPhoto(clickedImage) {
    let images = document.getElementsByClassName('photo');
  
    for (let i = 0; i < images.length; i++) {
      if (images[i] === clickedImage) {
        images[i].classList.toggle('expanded');
      } else {
        images[i].classList.remove('expanded');
      }
    }
  } 