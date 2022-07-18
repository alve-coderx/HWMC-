import { createRef, useEffect } from "react";
import "@left4code/tw-starter/dist/js/modal";
import { init } from "./index";
import PropTypes from "prop-types";

function Dropzone(props) {
  const fileUploadRef = createRef();

  useEffect(() => {
    props.getRef(fileUploadRef.current);
    init(fileUploadRef.current, props);
  }, [props.options, props.children]);

  const { options, getRef, ...computedProps } = props;
  return (
    <div {...computedProps} ref={fileUploadRef} className="dropzone">
      <div className="dz-message">{props.children}</div>
    </div>
  );
}

Dropzone.propTypes = {
  options: PropTypes.object,
  getRef: PropTypes.func,
};

Dropzone.defaultProps = {
  options: {},
  getRef: () => {},
};

export default Dropzone;
