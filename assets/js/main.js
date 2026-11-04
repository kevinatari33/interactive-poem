
const words = document.querySelectorAll(".word");
const message = document.querySelector("#message");

let scattered = false;

function changePoem() {
  scattered = !scattered;

  words.forEach(function (word, index) {
    if (scattered) {
      word.style.transform =
        "translate(" + (index * 12 - 24) + "px, " +
        (index % 2 === 0 ? 20 : -20) + "px)";

      word.style.opacity = 0.6;
    } else {
      word.style.transform = "translate(0, 0)";
      word.style.opacity = 1;
    }
  });

  document.body.classList.toggle("scattered", scattered);

  if (scattered) {
    message.textContent = "Memories break into little pieces.";
  } else {
    message.textContent = "Some memories never leave us.";
  }
}

words.forEach(function (word) {
  word.addEventListener("click", changePoem);
});
