const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
languageSelector.addEventListener("change", translate);

const greetingsArr = [
  {
    language: "English",
    greeting: "Merry Christmas!",
    greetingYear: "Happy New Year!",
  },
  {
    language: "Spanish",
    greeting: "Feliz Navidad!",
    greetingYear: "¡Feliz año nuevo!",
  },
  {
    language: "Ukrainian",
    greeting: "щасливого Різдва!",
    greetingYear: "Щасливого Нового року!",
  },
  {
    language: "Welsh",
    greeting: "Nadolig Llawen!",
    greetingYear: "Blwyddyn Newydd Dda!",
  },
];

function translate() {
  // Task:
  // - Write a function to display the correct greeting when a language is selected.
  switch (languageSelector.value) {
    case "English":
      greetingDisplay.textContent = greetingsArr[0].greeting + " " + greetingsArr[0].greetingYear;
      break;
    case "Spanish":
      greetingDisplay.textContent = greetingsArr[1].greeting + " " + greetingsArr[1].greetingYear;
      break;
    case "Ukrainian":
      greetingDisplay.textContent = greetingsArr[2].greeting + " " + greetingsArr[2].greetingYear;
      break;
    case "Welsh":
      greetingDisplay.textContent = greetingsArr[3].greeting + " " + greetingsArr[3].greetingYear;
      break;
    default:
      console.log("No such language");
  }
}
translate();
// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
