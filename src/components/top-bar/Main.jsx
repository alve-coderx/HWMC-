import { useState, useEffect } from "react";
import {
  Lucide,
  LoadingIcon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import Tracker from "../Tracker";
import { Transition } from "react-transition-group";
import { useLocation, useNavigate } from "react-router-dom";
import { helper as $h } from "@/utils";
import { sideMenu as useSideMenuStore } from "@/stores/side-menu";
import { useRecoilValue } from "recoil";
import { nestedMenu } from "@/layouts/side-menu";
import { toggleMobileMenu, linkTo, enter, leave } from "./index";
import classnames from "classnames";
import dom from "@left4code/tw-starter/dist/js/dom";
import SimpleBar from "simplebar";


function Main(props) {
  const [searchDropdown, setSearchDropdown] = useState(false);
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

  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };

  useEffect(()=>{
    console.log("Helo",props.isAuthenticatting)

  },[])
  return (
    <div className="pr-10 md:pr-0 lg:pr-0">
      {/* BEGIN: Top Bar */}
      <div className="lg:hidden md:hidden sm:inline top-bar sticky" style={{marginTop : '-12px'}}>
        <div className="w-full xl:w-9/12 2xl:w-11/12 "> 
          <Tracker />
        </div>
      </div>    
      {/* BEGIN: Top Bar */}
      <div style={{backgroundColor : '#0b0d12',marginBottom:'10px'}} className="flex px-2 sticky justify-around top-16 rounded-2xl top-bar md:top-0 ">
     
         <div>
            {/* BEGIN: Search */}
            <div className="intro-x relative mr-3 sm:mr-6">
              <div className="search hidden sm:block">
                <input
                  type="text"
                  className="search__input form-control border-transparent"
                  placeholder="Search Coming Soon..."
                  onFocus={showSearchDropdown}
                  onBlur={hideSearchDropdown}
                />
                <Lucide
                  icon="Search"
                  className="search__icon dark:text-slate-500"
                />
              </div>
              <a className="notification sm:hidden" href="">
                <Lucide
                  icon="Search"
                  className="notification__icon dark:text-slate-500"
                />
              </a>
              <div
                className={classnames({
                  "search-result": true,
                  show: searchDropdown,
                })}
              >          
              </div>
            </div>
            {/* END: Search  */}
            {/* BEGIN: MainMenu */}
            
         </div>
         <nav
              aria-label="mainmenu"
              className="min-w-fit -intro-x mr-auto hidden sm:flex justify-center items-center"
            >     
              <div className="top-menu__title">   
                <a href="#" className="text-xs md:text-sm text-white dark:text-white">Overview Dashboard</a>
              </div>
            </nav>
        {/* END: MainMenu */}
        <div className="lg:inline hidden w-7/12 xl:w-9/12 2xl:w-11/12 h-full px-4 pt-3">
          <Tracker />
        </div>

        <div className="flex items-center">
          <button  className="btn btn-custom shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 mr-5" onClick={()=>{
            
            console.log("Clicked");
            if(!props.isAuthenticated) props.login()
            else props.logOut()
            
            }}>

          {props.isAuthenticatting ?
          <LoadingIcon icon="oval" color="white" className="w-4 h-4 ml-2 mr-2" />
          :
          <div className="side-menu__icon mr-3 ml-1">


          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={20} viewBox="0 0 212 189"><g fill="none" fillRule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875" /><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)" /><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188" /><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27" /><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" /><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" /><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" /><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" /><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" /><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" /><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" /><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" /><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" /><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625" /><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)" /><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)" /><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" /><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" /><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" /><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" /><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" /><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" /><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" /><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" /><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" /><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" /><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" /><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)" /><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" /><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" /></g></g></svg>


          </div>
          }
              
        
              {props.isAuthenticated ?
              <span className="mr-2"> Logout</span> 
              : 
              
              <span className="mr-2"> Connect</span> 
              }
          
          
          </button>
          <div className="min-w-fit mr-auto flex justify-end">
            <DarkModeSwitcher />
          </div>
          
        </div>
        <div
          className={classnames(
            {
            "mobile-menu lg:hidden md:hidden": true,
            "mobile-menu--active": activeMobileMenu,
          })}
          >
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

            <div className="scrollable" style={{backgroundColor: 'rgb(11, 13, 18)'}}>
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
      </div>
      {/* END: Top Bar */}
    </div>
  );
}

export default Main;
