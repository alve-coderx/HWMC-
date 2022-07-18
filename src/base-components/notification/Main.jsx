import { createElement, useRef, createRef, useEffect } from "react";
import "@left4code/tw-starter/dist/js/modal";
import { init, reInit } from "./index";
import PropTypes from "prop-types";

function Notification(props) {
  const initialRender = useRef(true);
  const toastifyRef = createRef();

  useEffect(() => {
    if (initialRender.current) {
      props.getRef(toastifyRef.current);
      init(toastifyRef.current, props);
      initialRender.current = false;
    } else {
      reInit(toastifyRef.current);
    }
  }, [props.options, props.children]);

  const { type, data, options, width, height, getRef, ...computedProps } =
    props;
  return createElement(
    "div",
    {
      ...computedProps,
      className: `toastify-content hidden ${props.className}`,
      ref: toastifyRef,
    },
    props.children
  );
}

Notification.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object,
  getRef: PropTypes.func,
};

Notification.defaultProps = {
  className: "",
  options: {},
  getRef: () => {},
};

export default Notification;
