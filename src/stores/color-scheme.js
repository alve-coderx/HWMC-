import { atom, selector } from "recoil";

const colorSchemeValue = atom({
  key: "colorSchemeValue",
  default:
    localStorage.getItem("colorScheme") === null
      ? "default"
      : localStorage.getItem("colorScheme"),
});

const colorScheme = selector({
  key: "colorScheme",
  get: ({ get }) => {
    if (localStorage.getItem("colorScheme") === null) {
      localStorage.setItem("colorScheme", "default");
    }

    return get(colorSchemeValue);
  },
});

export { colorSchemeValue, colorScheme };
