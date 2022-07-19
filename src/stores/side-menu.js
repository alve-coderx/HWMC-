import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Overview Dashboard",
      },
      {
        icon: "ArrowLeftRight",
        pathname: "/swap",
        title: "Swap",
      },
      {
        icon: "Axe",
        pathname: "/sart-contract",
        title: "Manage Smart Contract",
      },
    ],
  },
});

export { sideMenu };
