const glowElement = document.querySelector(".glow-element");
const glow = document.createElement("div");
glow.classList.add("glow");
glowElement.appendChild(glow);

glowElement.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  glow.style.left = `${clientX}px`;
  glow.style.top = `${clientY}px`;
  glow.style.transform = "translate(-50%, -50%) scale(1)";
});

glowElement.addEventListener("mouseleave", () => {
  glow.style.transform = "translate(-50%, -50%) scale(0)";
});
