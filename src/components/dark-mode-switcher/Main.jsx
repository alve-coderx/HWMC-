import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeValue, darkMode as darkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").removeClass("dark") : dom("html").addClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher cursor-pointer shadow-md top-0 right-0 box border rounded-full flex items-center "
        onClick={switchMode}
      >
        <div
          className={classnames({
            "dark-mode-switcher__toggle border": true,
            "dark-mode-switcher__toggle--active": darkMode,
          })}
        ></div>
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  );
}

export default Main;
