import { createElement, createRef, useEffect } from "react";
import tippy, { roundArrow, animateFill } from "tippy.js";
import PropTypes from "prop-types";

const init = (el, props) => {
  tippy(`[name="${props.to}"]`, {
    plugins: [animateFill],
    content: el,
    allowHTML: true,
    arrow: roundArrow,
    popperOptions: {
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
          },
        },
      ],
    },
    animateFill: false,
    animation: "shift-away",
    theme: "light",
    trigger: "click",
    ...props.options,
  });
};

function TippyContent(props) {
  const tippyRef = createRef();

  useEffect(() => {
    props.getRef(tippyRef.current);
    init(tippyRef.current, props);
  }, [props.content]);

  const { to, options, getRef, ...computedProps } = props;
  return createElement(
    "div",
    {
      ...computedProps,
      ref: tippyRef,
    },
    props.children
  );
}

TippyContent.propTypes = {
  to: PropTypes.string,
  options: PropTypes.object,
  getRef: PropTypes.func,
};

TippyContent.defaultProps = {
  to: "span",
  options: {},
  getRef: () => {},
};

export default TippyContent;
