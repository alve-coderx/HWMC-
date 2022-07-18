import { atom } from "recoil";

const simpleMenu = atom({
  key: "simpleMenu",
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
        pathname: "/smart-contract",
        title: "Manage Smart Contract",
      }
    ],
  },
});

export { simpleMenu };
