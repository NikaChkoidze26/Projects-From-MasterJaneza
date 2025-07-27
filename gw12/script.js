let searchInput = document.getElementById("search");
let users = document.getElementsByClassName("user");
let noResults = document.getElementById("noResults");

searchInput.onkeyup = function () {
  let value = searchInput.value.toLowerCase();
  let visibleCount = 0;

  for (let i = 0; i < users.length; i++) {
    let text = users[i].innerText.toLowerCase();
    if (text.includes(value)) {
      users[i].style.display = "flex";
      visibleCount++;
    } else {
      users[i].style.display = "none";
    }
  }

  noResults.style.display = visibleCount === 0 ? "block" : "none";
};