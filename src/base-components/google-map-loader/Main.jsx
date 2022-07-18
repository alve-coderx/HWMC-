import { createRef, useEffect } from "react";
import { initializeMap } from "./index";
import PropTypes from "prop-types";

function GoogleMapLoader(props) {
  const mapRef = createRef();

  useEffect(() => {
    props.init((mapConfig) => {
      return initializeMap(mapRef.current, mapConfig);
    });
  }, [props.init]);

  return <div ref={mapRef} className={props.className}></div>;
}

GoogleMapLoader.propTypes = {
  init: PropTypes.func,
};

GoogleMapLoader.defaultProps = {
  init: () => {},
};

export default GoogleMapLoader;
