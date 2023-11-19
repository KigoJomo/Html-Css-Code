const rotate_btn = document.getElementById("rotate_btn");
const orbit1 = document.getElementById("orbit1");
const body = document.querySelector("body");
let rotation_on = false;

rotate_btn.addEventListener("click", () => {
    if (rotation_on) {
        orbit1.classList.remove("orbit-rotate");
        rotate_btn.innerHTML = "start rotation";
        rotation_on = false;
    } else {
        orbit1.classList.add("orbit-rotate");
        rotate_btn.innerHTML = "stop rotation";
        rotation_on = true;
    }
})
