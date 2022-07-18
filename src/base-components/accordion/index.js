import { createElement, createRef, useEffect } from "react";
import dom from "@left4code/tw-starter/dist/js/dom";
import "@left4code/tw-starter/dist/js/accordion";
import PropTypes from "prop-types";

const init = (el, props) => {
  const accordionGroupId = "_" + Math.random().toString(36).substr(2, 9);
  dom(el).attr("id", accordionGroupId);
  dom(el)
    .find(".accordion-item")
    .each(function (key, el) {
      const accordionId = "_" + Math.random().toString(36).substr(2, 9);
      const accordionPanelId = "_" + Math.random().toString(36).substr(2, 9);
      dom(this).find(".accordion-header").attr("id", accordionId);
      dom(this).find(".accordion-button").attr({
        "data-tw-target": accordionPanelId,
        "aria-controls": accordionPanelId,
      });
      dom(this).find(".accordion-collapse").attr({
        id: accordionPanelId,
        "aria-labelledby": accordionId,
        "data-tw-parent": accordionGroupId,
      });

      const accordion = tailwind.Accordion.getOrCreateInstance(
        dom(el).find("[data-tw-toggle='collapse']")[0]
      );

      if (props.selectedIndex === null) {
        accordion.hide();
      } else if (key === props.selectedIndex) {
        accordion.show();
      }

      const accordionButton = dom(el).find(".accordion-header")[0];
      if (accordionButton["__initiated"] === undefined) {
        accordionButton["__initiated"] = true;

        accordionButton.addEventListener("show.tw.accordion", () => {
          props.onChange(key);
        });
      }
    });
};

// Accordion wrapper
function AccordionGroup(props) {
  const accordionRef = createRef();

  useEffect(() => {
    init(accordionRef.current, props);
  }, [props.selectedIndex]);

  return createElement(
    props.tag,
    {
      className: `accordion ${props.className}`,
      ref: accordionRef,
    },
    props.children
  );
}

AccordionGroup.propTypes = {
  selectedIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  tag: PropTypes.string,
  onChange: PropTypes.func,
};

AccordionGroup.defaultProps = {
  selectedIndex: 0,
  tag: "div",
  onChange: () => {},
};

function AccordionItem(props) {
  return createElement(
    "div",
    {
      className: `accordion-item ${props.className}`,
    },
    props.children
  );
}

function Accordion(props) {
  return createElement(
    "div",
    {
      className: "accordion-header",
    },
    createElement(
      "button",
      {
        className: `accordion-button collapsed ${props.className}`,
        type: "button",
        "aria-expanded": false,
        "data-tw-toggle": "collapse",
      },
      props.children
    )
  );
}

Accordion.propTypes = {
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: "",
};

function AccordionPanel(props) {
  return createElement(
    "div",
    {
      className: "accordion-collapse collapse",
    },
    createElement(
      "div",
      {
        className: `accordion-body ${props.className}`,
      },
      props.children
    )
  );
}

AccordionPanel.propTypes = {
  className: PropTypes.string,
};

AccordionPanel.defaultProps = {
  className: "",
};

export { AccordionGroup, AccordionItem, Accordion, AccordionPanel };
