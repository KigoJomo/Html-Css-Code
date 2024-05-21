// script to duplicate images
document.addEventListener("DOMContentLoaded", function () {
  const originalsContainer = document.querySelector(".originals");
  const duplicatesContainer = document.querySelector(".duplicates");

  // Clone all images from the originals container and append them to the duplicates container
  const images = originalsContainer.querySelectorAll("img");
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    duplicatesContainer.appendChild(clone);
  });
});
