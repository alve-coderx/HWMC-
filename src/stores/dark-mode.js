import { atom, selector } from "recoil";

const darkModeValue = atom({
  key: "darkModeValue",
  default: localStorage.getItem("darkMode") === "true",
});

const darkMode = selector({
  key: "darkMode",
  get: ({ get }) => {
    if (localStorage.getItem("darkMode") === null) {
      localStorage.setItem("darkMode", false);
    }

    return get(darkModeValue);
  },
});

export { darkModeValue, darkMode };
