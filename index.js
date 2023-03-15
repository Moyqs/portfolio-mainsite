const burger = document.querySelector('.burger');
const burgerLinks = document.querySelector('.burger-links');
const xIcon = document.querySelector('.x-icon');

function removeBurger() {
    burger.style.display = "none";
    xIcon.style.display = "inline-block";
    burgerLinks.style.display = "block";
  }

burger.addEventListener("click", removeBurger);

function removeX() {
    burger.style.display = "inline-block";
    xIcon.style.display = "none";
    burgerLinks.style.display = "none";

  }

xIcon.addEventListener("click", removeX);

function handleResize() {
    if (window.innerWidth > 1100) {
        xIcon.style.display = 'none';
        burger.style.display = 'none';
        burgerLinks.style.display = "none";

    } else {
        burger.style.display = 'inline-block';
    }
  }

handleResize();

window.addEventListener('resize', handleResize);
