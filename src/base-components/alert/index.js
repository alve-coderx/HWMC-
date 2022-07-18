import { createElement, createRef, useEffect } from "react";
import "@left4code/tw-starter/dist/js/alert";
import PropTypes from "prop-types";

const init = (el, props) => {
  const alert = tailwind.Alert.getOrCreateInstance(el);
  if (props.show) {
    alert.show();
  } else {
    alert.hide();
  }

  if (el["__initiated"] === undefined) {
    el["__initiated"] = true;

    el.addEventListener("show.tw.alert", () => {
      props.onShow();
    });

    el.addEventListener("shown.tw.alert", () => {
      props.onShown();
    });

    el.addEventListener("hide.tw.alert", () => {
      props.onHide();
    });

    el.addEventListener("hidden.tw.alert", () => {
      props.onHidden();
    });
  }
};

// Alert wrapper
function Alert(props) {
  const alertRef = createRef();

  useEffect(() => {
    init(alertRef.current, props);
  }, [props.show]);

  return createElement(
    "div",
    {
      className: `alert ${props.className}`,
      role: "alert",
      ref: alertRef,
    },
    typeof props.children === "function"
      ? props.children({
          dismiss: () => {
            tailwind.Alert.getOrCreateInstance(alertRef.current).hide();
          },
        })
      : props.children
  );
}

Alert.propTypes = {
  show: PropTypes.bool,
  onShow: PropTypes.func,
  onShown: PropTypes.func,
  onHide: PropTypes.func,
  onHidden: PropTypes.func,
};

Alert.defaultProps = {
  show: true,
  onShow: () => {},
  onShown: () => {},
  onHide: () => {},
  onHidden: () => {},
};

export { Alert };
