// function get element
const getEle = (element) => document.querySelector(element);

// funcion remove class name
const removeClassName = (elementParent, removeElement) => {
  let carouselELe = getEle(elementParent);

  let extendedExist = carouselELe.className.includes(removeElement);

  if (extendedExist && removeElement) {
    carouselELe.classList.remove(removeElement);
  }
};
// funcion add class name
const addClassName = (elementParent, addElement) => {
  let carouselELe = getEle(elementParent);

  carouselELe.classList.add(addElement);
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    addClassName(".logo", "hide");
    addClassName(".navBar", "header-fixed");
    addClassName(".btn-menu", "hide");
    addClassName(".mainNav", "scroll-show");
  } else {
    removeClassName(".mainNav", "scroll-show");
    removeClassName(".logo", "hide");
    removeClassName(".btn-menu", "hide");
    removeClassName(".navBar", "header-fixed");
  }

  if (document.documentElement.scrollTop < 200) {
    addClassName(".scroll-top", "hide");
  } else {
    removeClassName(".scroll-top", "hide");
  }
}

// change width carousel
removeClassName(".carousel", "extended");

//hightlight text
removeClassName(".name", "hightlight");
removeClassName(".job", "hightlight");

// toggle hamburgers
const getHamburger = getEle(".nav-ham");
const getLineHamburger = getEle(".ham");
const getMenuNavbar = getEle(".mainNav");
const toggleHamburger = (e) => {
  getHamburger.classList.toggle("active");
  getLineHamburger.classList.toggle("active");
  getMenuNavbar.classList.toggle("unhide");
};
getHamburger.addEventListener("click", toggleHamburger);

// function scroll to show navbar
window.onscroll = function () {
  scrollFunction();
};

//AOS script
AOS.init({
  //   once: true, // whether animation should happen only once - while scrolling down
});

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const scroller = new SweetScroll({
      /* some options */
      duration: 1000, // Specifies animation duration in integer
      easing: "easeOutQuint", // Specifies the pattern of easing
      offset: -100,
    });
    const scrollerToTop = new SweetScroll({
      /* some options */
      trigger: ".scroll-top[data-scroll]",
      duration: 3000, // Specifies animation duration in integer
      easing: "easeOutQuint", // Specifies the pattern of easing
      offset: 0,
    });
  },
  false
);
