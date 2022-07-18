import { createRef, useEffect } from "react";
import { Draggable as FullcalendarDraggable } from "@fullcalendar/interaction";
import PropTypes from "prop-types";

const init = (el, props) => {
  new FullcalendarDraggable(el, props.options);
};

function Draggable(props) {
  const draggableRef = createRef();

  useEffect(() => {
    init(draggableRef.current, props);
  }, [props.options]);

  return (
    <div ref={draggableRef} className={props.className}>
      {props.children}
    </div>
  );
}

Draggable.propTypes = {
  options: PropTypes.object,
};

Draggable.defaultProps = {
  options: {},
};

export default Draggable;
