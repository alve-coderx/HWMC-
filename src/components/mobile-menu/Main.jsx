import { Transition } from "react-transition-group";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { helper as $h } from "@/utils";
import { sideMenu as useSideMenuStore } from "@/stores/side-menu";
import { useRecoilValue } from "recoil";
import { nestedMenu } from "@/layouts/side-menu";
import { toggleMobileMenu, linkTo, enter, leave } from "./index";
import { Lucide } from "@/base-components";
import logoUrl from "@/assets/images/logo-icon.png";
import classnames from "classnames";
import dom from "@left4code/tw-starter/dist/js/dom";
import SimpleBar from "simplebar";

function Main(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState([]);
  const sideMenuStore = useRecoilValue(useSideMenuStore);
  const mobileMenu = () => nestedMenu($h.toRaw(sideMenuStore.menu), location);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  useEffect(() => {
    new SimpleBar(dom(".mobile-menu .scrollable")[0]);
    setFormattedMenu(mobileMenu());
  }, [sideMenuStore, location.pathname]);

  return (
    <>
      {/* BEGIN: Mobile Menu */}
      <div
        className={classnames({
          "mobile-menu md:hidden hidden": true,
          "mobile-menu--active": activeMobileMenu,
        })}
      >
        <div className="mobile-menu-bar">
          <a href="" className="flex mr-auto">
            <img
              alt="Hydro Whales Mining Club Dashboard"
              className="w-6"
              src={logoUrl}
            />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mobile-menu-toggler"
          >
            <Lucide
              icon="BarChart2"
              className="w-8 h-8 text-white transform -rotate-90"
              onClick={() => {
                toggleMobileMenu(activeMobileMenu, setActiveMobileMenu);
              }}
            />
          </a>
        </div>
        <div className="scrollable">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mobile-menu-toggler"
          >
            <Lucide
              icon="XCircle"
              className="w-8 h-8 text-white transform -rotate-90"
              onClick={() => {
                toggleMobileMenu(activeMobileMenu, setActiveMobileMenu);
              }}
            />
          </a>
          <ul className="scrollable__content py-2">
            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              menu == "devider" ? (
                <li className="menu__devider my-6" key={menu + menuKey}></li>
              ) : (
                <li key={menu + menuKey}>
                  <a
                    href={menu.subMenu ? "#" : menu.pathname}
                    className={classnames({
                      menu: true,
                      "menu--active": menu.active,
                      "menu--open": menu.activeDropdown,
                    })}
                    onClick={(event) => {
                      event.preventDefault();
                      linkTo(menu, navigate, setActiveMobileMenu);
                      setFormattedMenu($h.toRaw(formattedMenu));
                    }}
                  >
                    <div className="menu__icon">
                      <Lucide icon={menu.icon} />
                    </div>
                    <div className="menu__title">
                      {menu.title}
                      {menu.subMenu && (
                        <div
                          className={classnames({
                            "menu__sub-icon": true,
                            "transform rotate-180": menu.activeDropdown,
                          })}
                        >
                          <Lucide icon="ChevronDown" />
                        </div>
                      )}
                    </div>
                  </a>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition
                      in={menu.activeDropdown}
                      onEnter={enter}
                      onExit={leave}
                      timeout={300}
                    >
                      <ul
                        className={classnames({
                          "menu__sub-open": menu.activeDropdown,
                        })}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <a
                              href={subMenu.subMenu ? "#" : subMenu.pathname}
                              className={classnames({
                                menu: true,
                                "menu--active": subMenu.active,
                              })}
                              onClick={(event) => {
                                event.preventDefault();
                                linkTo(subMenu, navigate, setActiveMobileMenu);
                                setFormattedMenu($h.toRaw(formattedMenu));
                              }}
                            >
                              <div className="menu__icon">
                                <Lucide icon="Activity" />
                              </div>
                              <div className="menu__title">
                                {subMenu.title}
                                {subMenu.subMenu && (
                                  <div
                                    className={classnames({
                                      "menu__sub-icon": true,
                                      "transform rotate-180":
                                        subMenu.activeDropdown,
                                    })}
                                  >
                                    <Lucide icon="ChevronDown" />
                                  </div>
                                )}
                              </div>
                            </a>
                            {/* BEGIN: Third Child */}
                            {subMenu.subMenu && (
                              <Transition
                                in={subMenu.activeDropdown}
                                onEnter={enter}
                                onExit={leave}
                                timeout={300}
                              >
                                <ul
                                  className={classnames({
                                    "menu__sub-open": subMenu.activeDropdown,
                                  })}
                                >
                                  {subMenu.subMenu.map(
                                    (lastSubMenu, lastSubMenuKey) => (
                                      <li key={lastSubMenuKey}>
                                        <a
                                          href={
                                            lastSubMenu.subMenu
                                              ? "#"
                                              : lastSubMenu.pathname
                                          }
                                          className={classnames({
                                            menu: true,
                                            "menu--active": lastSubMenu.active,
                                          })}
                                          onClick={(event) => {
                                            event.preventDefault();
                                            linkTo(
                                              lastSubMenu,
                                              navigate,
                                              setActiveMobileMenu
                                            );
                                          }}
                                        >
                                          <div className="menu__icon">
                                            <Lucide icon="Zap" />
                                          </div>
                                          <div className="menu__title">
                                            {lastSubMenu.title}
                                          </div>
                                        </a>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </Transition>
                            )}
                            {/* END: Third Child */}
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                  {/* END: Second Child */}
                </li>
              )
            )}
            {/* END: First Child */}
          </ul>
        </div>
      </div>
      {/* END: Mobile Menu */}
    </>
  );
}

export default Main;
