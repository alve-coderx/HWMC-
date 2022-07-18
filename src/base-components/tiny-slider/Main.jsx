import { createRef, useRef, useEffect } from "react";
import { init, reInit } from "./index";
import PropTypes from "prop-types";

function TinySlider(props) {
  const initialRender = useRef(true);
  const sliderRef = createRef();

  useEffect(() => {
    props.getRef(sliderRef.current);

    if (initialRender.current) {
      init(sliderRef.current, props);
      initialRender.current = false;
    } else {
      reInit(sliderRef.current);
    }
  }, [props.options, props.children]);

  return (
    <div ref={sliderRef} className={`tiny-slider ${props.className}`}>
      {props.children}
    </div>
  );
}

TinySlider.propTypes = {
  options: PropTypes.object,
  getRef: PropTypes.func,
  className: PropTypes.string,
};

TinySlider.defaultProps = {
  options: {},
  getRef: () => {},
  className: "",
};

export default TinySlider;
