import {
  createElement,
  createRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import dom from "@left4code/tw-starter/dist/js/dom";
import "@left4code/tw-starter/dist/js/tab";
import PropTypes from "prop-types";

const init = (el, props) => {
  const tabPanels = dom(el).find(".tab-content").first();
  const tabPanes = dom(tabPanels).children(".tab-pane");
  const tabList = [];
  const ids = [];

  dom(el)
    .find(".nav")
    .each(function () {
      if (dom(this).closest(".tab-content")[0] !== tabPanels[0]) {
        tabList.push(this);
      }
    });

  tabList.forEach((node) => {
    dom(node)
      .find(".nav-item")
      .each(function (key, el) {
        let id = "_" + Math.random().toString(36).substr(2, 9);
        if (ids[key] !== undefined) {
          id = ids[key];
        } else {
          ids[key] = id;
        }

        dom(this)
          .find(".nav-link")
          .attr({
            "data-tw-target": `#${id}`,
            "aria-controls": id,
            "aria-selected": false,
          });

        if (tabPanes[key] !== undefined) {
          dom(tabPanes[key]).attr({
            id: id,
            "aria-labelledby": `${id}-tab`,
          });
        }

        if (key === props.selectedIndex) {
          const tab = tailwind.Tab.getOrCreateInstance(
            dom(el).find(".nav-link")[0]
          );
          tab.show();
          dom(tabPanes).removeAttr("style");
        }

        const navLink = dom(el).find(".nav-link")[0];
        if (navLink["__initiated"] === undefined) {
          navLink["__initiated"] = true;

          navLink.addEventListener("show.tw.tab", () => {
            props.onChange(key);
          });
        }
      });
  });
};

// Tab wrapper
const tabGroupPropsContext = createContext();
function TabGroup(props) {
  const tabRef = createRef();

  useEffect(() => {
    init(tabRef.current, props);
  }, [props.selectedIndex]);

  return createElement(
    tabGroupPropsContext.Provider,
    {
      value: props,
    },
    createElement(
      props.tag,
      {
        className: props.className,
        ref: tabRef,
      },
      props.children
    )
  );
}

TabGroup.propTypes = {
  selectedIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  tag: PropTypes.string,
  onChange: PropTypes.func,
};

TabGroup.defaultProps = {
  selectedIndex: 0,
  tag: "div",
  onChange: () => {},
};

function TabList(props) {
  const tabListRef = createRef();
  const tabGroupProps = useContext(tabGroupPropsContext);

  useEffect(() => {
    init(dom(tabListRef.current).parent(), tabGroupProps);
  }, [tabGroupProps]);

  return createElement(
    "ul",
    {
      className: `nav ${props.className}`,
      role: "tablist",
      ref: tabListRef,
    },
    props.children
  );
}

function Tab(props) {
  return createElement(
    "li",
    {
      className: `nav-item ${props.fullWidth ? "flex-1" : ""}`,
      role: "presentation",
    },
    createElement(
      props.tag,
      {
        className: `nav-link ${props.className}`,
        type: "button",
        role: "tab",
      },
      props.children
    )
  );
}

Tab.propTypes = {
  fullWidth: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
};

Tab.defaultProps = {
  fullWidth: true,
  tag: "a",
  className: "",
};

function TabPanels(props) {
  return createElement(
    "div",
    {
      className: `tab-content w-full ${props.className}`,
    },
    props.children
  );
}

function TabPanel(props) {
  return createElement(
    "div",
    {
      className: `tab-pane ${props.className}`,
      role: "tabpanel",
    },
    props.children
  );
}

export { TabGroup, TabList, Tab, TabPanels, TabPanel };
