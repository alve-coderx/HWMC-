import { createElement, createRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/auto";

const init = (el, props) => {
  const canvas = el?.getContext("2d");
  const chart = new Chart(canvas, {
    type: props.type,
    data: props.data,
    options: props.options,
  });

  // Attach ChartJs instance
  el.instance = chart;
};

function ChartComponent(props) {
  const initialRender = useRef(true);
  const chartRef = createRef();

  useEffect(() => {
    if (initialRender.current) {
      props.getRef(chartRef.current);
      init(chartRef.current, props);
      initialRender.current = false;
    } else {
      chartRef.current.instance.data = props.data;
      chartRef.current.instance.options = props.options;
      chartRef.current.instance.update();
    }
  }, [props.data, props.options]);

  const { type, data, options, width, height, getRef, ...computedProps } =
    props;
  return createElement(
    "div",
    {
      style: {
        width: `${width}px`,
        height: `${height}px`,
      },
    },
    createElement(
      "canvas",
      {
        ...computedProps,
        ref: chartRef,
      },
      props.children
    )
  );
}

ChartComponent.propTypes = {
  type: PropTypes.oneOf(["line", "pie", "doughnut", "bar"]),
  data: PropTypes.object,
  options: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getRef: PropTypes.func,
  className: PropTypes.string,
};

ChartComponent.defaultProps = {
  type: "line",
  data: {},
  options: {},
  width: "auto",
  height: "auto",
  getRef: () => {},
  className: "",
};

export default ChartComponent;
