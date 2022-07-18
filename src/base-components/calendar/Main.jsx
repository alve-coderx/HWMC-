import { createRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import PropTypes from "prop-types";

const init = (el, props) => {
  const calendar = new Calendar(el, props.options);
  calendar.render();
};

function Main(props) {
  const calendarRef = createRef();

  useEffect(() => {
    init(calendarRef.current, props);
  }, [props.options]);

  return <div ref={calendarRef} className="full-calendar"></div>;
}

Main.propTypes = {
  options: PropTypes.object,
};

Main.defaultProps = {
  options: {},
};

export default Main;
