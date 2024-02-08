const glowElements = document.querySelectorAll(".grid-item");
const glow = document.createElement("div");
glow.classList.add("glow");

glowElements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    glow.style.left = `${clientX}px`;
    glow.style.top = `${clientY}px`;
    glow.style.transform = "translate(-50%, -50%) scale(1)";
  });

  element.addEventListener("mouseleave", () => {
    glow.style.transform = "translate(-50%, -50%) scale(0)";
  });
});

// Append the glow element to the body once
document.body.appendChild(glow);
