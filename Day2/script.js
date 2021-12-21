const input = document.getElementById("input");
const btn = document.getElementById("btn");
const btnRemove = document.getElementById("btn-remove");
const evilRemove = document.getElementById("evil-remove");
let guestList = document.getElementById("guest-list");
let form = document.getElementById("form");
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"];
const error = document.getElementById("error");
// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

btn.addEventListener("click", function () {
  if (input.value === "") {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
    guestList.innerHTML = "";
    guests.push(input.value);
    guests.forEach((e) => {
      const li = document.createElement("li");
      li.textContent = e;
      guestList.appendChild(li);
    });
  }
});
// Stretch goals:
// - Add a button to remove the most recently added guests.
btnRemove.addEventListener("click", function () {
  guestList.innerHTML = "";
  guests.pop();
  guests.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e;
    guestList.appendChild(li);
  });
});
// - What about if you want to remove the evil relative?

evilRemove.addEventListener("click", function () {
  guestList.innerHTML = "";
  let evil = "Evil Relative";
  if (guests.indexOf(evil) >= 0) {
    guests = guests.filter((item) => item !== evil);
  }
  guests.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e;
    guestList.appendChild(li);
  });
});
