// menu hamburger
const header = document.querySelector("header");
const menuHamburger = document.querySelector(".menu_hamburger");
const liens = document.querySelectorAll(".nav_links a");
menuHamburger.addEventListener('click', () => {
    header.classList.toggle('menu_hamburger_active');

    if(header.classList.contains('menu_hamburger_active')) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflowY = "auto";
    }
})

liens.forEach(liens => {
    liens.addEventListener('click', () => {
      if (header.classList.contains('menu_hamburger_active')) {
        header.classList.remove('menu_hamburger_active');
        document.body.style.overflowY = "auto";
      }
    })
})