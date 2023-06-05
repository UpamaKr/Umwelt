// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     const openItem = document.querySelector(".open");
//     if (openItem && openItem !== item) {
//       openItem.classList.remove("open");
//     }
//     item.classList.toggle("open");
//   });
// });

const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const hiddenBox = icon.nextElementSibling;
    if (hiddenBox.style.display === "block") {
      hiddenBox.style.display = "none";
    } else {
      hiddenBox.style.display = "block";
    }
  });
});

const elements = document.querySelectorAll(".number");
for (let i = 0; i < elements.length; i++) {
  elements[i].textContent = (i + 1).toString().padStart(2, "0");
}

// const button = document.querySelector("#translate-button");
// const translatedText = document.querySelector("#translated-text");

// button.addEventListener("click", () => {
//   if (translatedText.style.display === "block") {
//     translatedText.style.display = "none";
//     button.textContent = "Translate";
//   } else {
//     translatedText.style.display = "block";
//     button.textContent = "Close";
//     button.style.display = "inline-block";
//     translatedText.style.display = "inline-block";
//     translatedText.parentNode.insertBefore(button, translatedText.nextSibling);
//   }
// });

const buttons = document.querySelectorAll(".translate-button");
const translatedTexts = document.querySelectorAll(".translated-text");

buttons.forEach((button, index) => {
  const translatedText = translatedTexts[index];

  button.addEventListener("click", () => {
    if (translatedText.style.display === "block") {
      translatedText.style.display = "none";
      button.textContent = "In English";
    } else {
      translatedText.style.display = "block";
      button.textContent = "Close";
      translatedText.parentNode.insertBefore(
        button,
        translatedText.nextSibling
      );
    }
  });
});
