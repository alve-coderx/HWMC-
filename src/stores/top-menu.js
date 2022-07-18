import { atom } from "recoil";

const topMenu = atom({
  key: "topMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/top-menu/page-1",
        title: "Page 1",
      },
      {
        icon: "Home",
        pathname: "/top-menu/page-2",
        title: "Page 2",
      },
    ],
  },
});

export { topMenu };
