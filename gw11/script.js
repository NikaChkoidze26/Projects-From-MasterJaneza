function changeImage(section) {
  const image = document.getElementById("main-image");
  const imageMap = {
    home: "https://media.istockphoto.com/id/472018064/photo/beautiful-new-england-style-home-exterior-at-night.jpg?s=612x612&w=0&k=20&c=aJvgIBQv7iJQy2xKrAkK_vXjPcW8n4ufsEsmVJyC8Eg=",
    work: "https://img.freepik.com/free-photo/vertical-selective-closeup-female-writing-notebook-with-blue-pen_181624-3170.jpg",
    blog: "https://static.vecteezy.com/system/resources/previews/039/356/456/large_2x/cloud-of-words-or-tags-related-to-blogging-and-blog-design-handwriting-in-a-notebook-vertical-poster-photo.jpg",
    about: "https://www.shutterstock.com/image-photo/professional-diverse-international-team-young-600nw-2353374147.jpg"
  };
  image.src = imageMap[section];
}
