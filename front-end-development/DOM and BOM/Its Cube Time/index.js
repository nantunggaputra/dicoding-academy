const gambar = document.getElementById("gambar");
gambar.setAttribute("width", 300);
gambar.setAttribute("height", 215);

const buttons = document.querySelectorAll(".button");
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute("type", "submit");

const links = document.getElementById("links");
const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar Programming di Dicoding";
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";

for (const button of buttons) {
  console.log(button.children[0]);
  button.children[0].style.borderRadius = "6px";
}
