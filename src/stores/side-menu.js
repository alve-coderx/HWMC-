import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Page 1",
      },
      {
        icon: "Home",
        pathname: "/page-2",
        title: "Page 2",
      },
    ],
  },
});

export { sideMenu };
