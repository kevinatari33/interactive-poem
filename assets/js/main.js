
const words = document.querySelectorAll(".word");
const message = document.querySelector(".message");

const moods = [
  {
    name: "drifting",
    line: "Even silence carries an echo.",
    className: "",
    transforms: [
      "translate(-8px, -5px) rotate(-3deg) scale(1.05)",
      "translate(4px, 8px) rotate(2deg) scale(1)",
      "translate(0, -10px) rotate(-1deg) scale(1.08)",
      "translate(6px, 5px) rotate(2deg) scale(0.98)",
      "translate(-4px, 10px) rotate(-3deg) scale(1.02)"
    ]
  },
  {
    name: "closer",
    line: "For a moment, your voice feels near.",
    className: "closer",
    transforms: [
      "translate(0, 0) scale(0.95)",
      "translate(0, 0) scale(1.2)",
      "translate(0, 0) scale(1.05)",
      "translate(0, 0) scale(0.95)",
      "translate(0, 0) scale(0.9)"
    ]
  },
  {
    name: "fading",
    line: "The farther it goes, the quieter it becomes.",
    className: "fading",
    transforms: [
      "translate(-25px, -10px) rotate(-5deg) scale(1.05)",
      "translate(10px, 8px) rotate(4deg) scale(0.9)",
      "translate(-5px, -15px) rotate(-3deg) scale(0.8)",
      "translate(25px, 12px) rotate(6deg) scale(0.75)",
      "translate(40px, -8px) rotate(9deg) scale(0.65)"
    ]
  }
];

let moodIndex = 0;

function changePoem() {
  moodIndex = (moodIndex + 1) % moods.length;

  const mood = moods[moodIndex];

  document.body.classList.remove("closer", "fading");

  if (mood.className) {
    document.body.classList.add(mood.className);
  }

  words.forEach(function (word, index) {
    word.style.transform = mood.transforms[index];

    // The last words fade as the memory moves farther away.
    word.style.opacity =
      mood.name === "fading"
        ? String(1 - index * 0.16)
        : "1";
  });

  message.textContent = mood.line;
}

words.forEach(function (word) {
  word.addEventListener("click", changePoem);
});
