import { createElement, createRef, useEffect, useRef } from "react";
import BalloonBlockEditor from "@ckeditor/ckeditor5-build-balloon-block";
import { init, updateData } from "./index";
import PropTypes from "prop-types";

function Main(props) {
  const editorRef = createRef();
  const cacheData = useRef("");
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      props.getRef(editorRef.current);
      init(editorRef.current, BalloonBlockEditor, { props, cacheData });
      initialRender.current = false;
    } else {
      updateData(editorRef.current, { props, cacheData });
    }
  }, [props.value]);

  const {
    tagName,
    disabled,
    config,
    value,
    onChange,
    onFocus,
    onBlur,
    onReady,
    getRef,
    ...computedProps
  } = props;
  return createElement(
    props.tagName,
    {
      ...computedProps,
      ref: editorRef,
      value: props.value,
      onChange: props.onChange,
      className: props.className,
    },
    props.children
  );
}

Main.propTypes = {
  tagName: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  config: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onReady: PropTypes.func,
  getRef: PropTypes.func,
};

Main.defaultProps = {
  tagName: "div",
  disabled: false,
  className: "",
  config: {},
  value: "",
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onReady: () => {},
  getRef: () => {},
};

export default Main;
