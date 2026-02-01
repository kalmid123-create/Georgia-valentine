const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");
const buttons = document.getElementById("buttons");

let scale = 1;

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const area = buttons.getBoundingClientRect();
  const x = Math.random() * (area.width - 100);
  const y = Math.random() * (area.height - 40);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  scale += 0.15;
  yesBtn.style.transform = `scale(${scale})`;
}

yesBtn.addEventListener("click", () => {
  buttons.classList.add("hidden");
  success.classList.remove("hidden");
});
