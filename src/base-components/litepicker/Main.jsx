import { createElement, createRef, useEffect } from "react";
import { setValue, init, reInit } from "./index";
import PropTypes from "prop-types";
import { useRef } from "react";

function Litepicker(props) {
  const initialRender = useRef(true);
  const litepickerRef = createRef();
  const tempValue = useRef(props.value);

  useEffect(() => {
    props.getRef(litepickerRef.current);

    if (initialRender.current) {
      setValue(props);
      init(litepickerRef.current, props);
      initialRender.current = false;
    } else {
      if (tempValue.current !== props.value) {
        reInit(litepickerRef.current, props);
      }
    }

    tempValue.current = props.value;
  }, [props.value]);

  const { options, value, onChange, getRef, ...computedProps } = props;
  return createElement(
    "input",
    {
      ...computedProps,
      ref: litepickerRef,
      type: "text",
      value: props.value,
      onChange: props.onChange,
    },
    props.children
  );
}

Litepicker.propTypes = {
  options: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  getRef: PropTypes.func,
};

Litepicker.defaultProps = {
  options: {},
  value: "",
  onChange: () => {},
  getRef: () => {},
};

export default Litepicker;
