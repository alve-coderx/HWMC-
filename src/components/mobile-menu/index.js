import dom from "@left4code/tw-starter/dist/js/dom";

// Toggle mobile menu
const toggleMobileMenu = (activeMobileMenu, setActiveMobileMenu) => {
  setActiveMobileMenu(!activeMobileMenu);
};

// Setup mobile menu
const linkTo = (menu, navigate, setActiveMobileMenu) => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
    setActiveMobileMenu(false);
    navigate(menu.pathname);
  }
};

const enter = (el, done) => {
  dom(el).slideDown(300);
};

const leave = (el, done) => {
  dom(el).slideUp(300);
};

export { toggleMobileMenu, linkTo, enter, leave };
