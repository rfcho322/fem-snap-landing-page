const wrapper = document.querySelector(".wrapper");
const sidebar = document.querySelector(".sidebar-nav__btn");
const sidebar_open = document.querySelector(".sidebar-menu");
const sidebar_close = document.querySelector(".sidebar-menu__close");
const dropdown_toggle = document.querySelectorAll(".dropdown-toggle");
const dropdown_menu = document.querySelectorAll(".dropdown-menu");

// SIDEBAR MENU OPEN
sidebar.addEventListener('click', event => {
  sidebar_open.style.display = "flex";
  wrapper.toggleAttribute("data-overlay");
  sidebar.setAttribute("aria-expanded", true);
});
// SIDEBAR MENU CLOSE
sidebar_close.addEventListener('click', event => {
  sidebar_open.style.display = "none";
  wrapper.toggleAttribute("data-overlay");
  sidebar.setAttribute("aria-expanded", false);
});

// DROPDOWN TOGGLE
dropdown_toggle.forEach((toggle, index) => {
  const icon = toggle.querySelector("use");
  toggle.addEventListener('click', isToggled => {
    // TOGGLE aria-expanded TO TRUE/FALSE
    const is_expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !is_expanded);

    // CHECKS IF aria-expanded="true", DISPLAY THE DROPDOWN ITEMS AND TOGGLE BETWEEN ARROW UP/DOWN ICON
    if (!is_expanded) {
      dropdown_menu[index].style.display = "grid";
      icon.setAttribute("href", "images/icon-arrow-up.svg#icon-arrow-up");
    } else {
      dropdown_menu[index].style.display = "none";
      icon.setAttribute("href", "images/icon-arrow-down.svg#icon-arrow-down");
    }
  });
});