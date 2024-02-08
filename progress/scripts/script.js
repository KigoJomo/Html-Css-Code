const progressElement = document.getElementById("progress")
const html = document.querySelector("body")

function scrollHandler() {
    const screenHeight = window.innerHeight
    const scrollY = Math.round(window.scrollY)
    const maxScreenHeight = html.scrollHeight
    const howMuchScroll = screenHeight + scrollY
    const progress = (howMuchScroll / maxScreenHeight) * 100

    progressElement.value = progress

    console.log(screenHeight, scrollY)
}

scrollHandler()
window.addEventListener('scroll', scrollHandler)
