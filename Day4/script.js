const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const container = document.querySelector(".elf-hangout-zone");

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  // Task:
  // - Write a function to duplicate the elf when the button is clicked.
  console.log(container.childElementCount);
  if (container.childElementCount > 100) {
    console.log("Enough elves");
  } else {
    let duplicate = elf.cloneNode(true);
    container.appendChild(duplicate);
  }

  // - See index.css for optional styling challenges.
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
