import { createElement, createRef, useEffect } from "react";
import { setValue, init, updateValue } from "./index";
import PropTypes from "prop-types";
import { useRef, useMemo } from "react";

function TomSelect(props) {
  const initialRender = useRef(true);
  const tomSelectRef = createRef();

  // Compute all default options
  const computedOptions = useMemo(() => {
    let options = {
      ...props.options,
      plugins: {
        dropdown_input: {},
        ...props.options.plugins,
      },
    };

    if (Array.isArray(props.value)) {
      options = {
        persist: false,
        create: true,
        onDelete: function (values) {
          return confirm(
            values.length > 1
              ? "Are you sure you want to remove these " +
                  values.length +
                  " items?"
              : 'Are you sure you want to remove "' + values[0] + '"?'
          );
        },
        ...options,
        plugins: {
          remove_button: {
            title: "Remove this item",
          },
          ...options.plugins,
        },
      };
    }

    return options;
  }, [props.options]);

  useEffect(() => {
    props.getRef(tomSelectRef.current);

    if (initialRender.current) {
      // Clone the select element to prevent tom select remove the original element
      const clonedEl = dom(tomSelectRef.current)
        .clone()
        .insertAfter(tomSelectRef.current)[0];
      dom(tomSelectRef.current).attr("hidden", true);

      // Initialize tom select
      setValue(clonedEl, props);
      init(tomSelectRef.current, clonedEl, props, computedOptions);

      initialRender.current = false;
    } else {
      const clonedEl = dom(tomSelectRef.current).next()[0];
      const value = props.value;
      updateValue(
        tomSelectRef.current,
        clonedEl,
        value,
        props,
        computedOptions
      );
    }
  }, [tomSelectRef, props.value]);

  const { options, value, onOptionAdd, onChange, getRef, ...computedProps } =
    props;
  return createElement(
    "select",
    {
      ...computedProps,
      ref: tomSelectRef,
      value: props.value,
      onChange: props.onChange,
      className: `tom-select ${props.className}`,
    },
    props.children
  );
}

TomSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  onOptionAdd: PropTypes.func,
  onChange: PropTypes.func,
  getRef: PropTypes.func,
};

TomSelect.defaultProps = {
  className: "",
  options: {},
  value: "",
  onOptionAdd: () => {},
  onChange: () => {},
  getRef: () => {},
};

export default TomSelect;
