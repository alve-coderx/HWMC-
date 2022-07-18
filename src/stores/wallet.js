import { atom, selector } from "recoil";

const walletConnectedValue = atom({
  key: "isWalletConnected",
  default: localStorage.getItem("walletConnected") === "false",
});

const walletConnected = selector({
  key: "isWalletConnected",
  get: ({ get }) => {
    if (localStorage.getItem("walletConnected") === null) {
      localStorage.setItem("walletConnected", true);
    }

    return get(darkModeValue);
  },
});

export { walletConnectedValue , walletConnected };
