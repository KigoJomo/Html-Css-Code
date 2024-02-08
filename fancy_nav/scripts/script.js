const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

const container = document.querySelector(".container");
const sections = document.querySelectorAll("section");
const sectionAnchors = document.querySelectorAll(".section-anchor");

function HandleScroll() {
  sections.forEach((section) => {
    if (elementIsVisibleInViewport(section)) {
      const sectionId = section.id;
      //get the id of the section that is currently in view
      const sectionAnchor = document.querySelector(`a[href="#${sectionId}"]`);
      //get the anchor element that points to the section in view
      sectionAnchors.forEach((anchor) => anchor.classList.remove("active"));
      //remove the active class from all sections
      sectionAnchor.classList.add("active");
      //add the active class to the anchor whose target is in view
    }
  });
}
HandleScroll();
container.addEventListener("scroll", HandleScroll);

sectionAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    sectionAnchors.forEach((link) => link.classList.remove("active"));
    anchor.classList.add("active");
  });
});

//when a section is in view, its background-attchment changes to "fixed"
//when another section scrolls into view, all other sections background-attachment changes back to "scroll"

function ChangeBackgroundAttachment() {
  sections.forEach((section) => {
    if (elementIsVisibleInViewport(section)) {
      sections.forEach((otherSection) => {
        otherSection.style.backgroundAttachment = "scroll";
      });
      section.style.backgroundAttachment = "fixed";
    }
  });
}
ChangeBackgroundAttachment();
container.addEventListener("scroll", ChangeBackgroundAttachment);

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
var isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    menu.style.right = "0";
    slideAnchors();
    changeMenuIcon();
    isMenuOpen = true;
  } else {
    menu.style.right = "-25%";
    changeMenuIcon();
    isMenuOpen = false;
    sectionAnchors.forEach((anchor) => { anchor.style.left = "150%" });
  }
});

container.addEventListener("click", () => {
  if (isMenuOpen) {
    menu.style.right = "-25%";
    changeMenuIcon();
    sectionAnchors.forEach((anchor) => {
      anchor.style.left = "150%";
    });
    isMenuOpen = false;
  }
    })
//smooth sliding of all anchor elements and changing of the button icon

function slideAnchors() {
  sectionAnchors.forEach((anchor, index) => {
    // anchor.style.left = "30%";
    setTimeout(() => {
      anchor.style.left = "30%";
    }, index * 90);
  })
}

function changeMenuIcon() {
  if (!isMenuOpen) {
    bar2.style.opacity = "0";
    bar1.style.transform = "rotateZ(45deg) translateX(.0vw) translateY(1.1vh)";
    bar3.style.transform =
      "rotateZ(-45deg) translateX(.0vw) translateY(-1.1vh)";
  } else {
    bar2.style.opacity = "1";
    bar1.style.transform = "none";
    bar3.style.transform = "none";
  }
}
