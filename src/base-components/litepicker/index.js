import dayjs from "dayjs";
import Litepicker from "litepicker";

const getDateFormat = (format) => {
  return format !== undefined ? format : "D MMM, YYYY";
};

const setValue = (props) => {
  const format = getDateFormat(props.options.format);
  if (!props.value.length) {
    let date = dayjs().format(format);
    date +=
      !props.options.singleMode && props.options.singleMode !== undefined
        ? " - " + dayjs().add(1, "month").format(format)
        : "";
    props.onChange(date);
  }
};

const init = (el, props) => {
  const format = getDateFormat(props.options.format);
  el.litePickerInstance = new Litepicker({
    element: el,
    ...props.options,
    format: format,
    setup: (picker) => {
      picker.on("selected", (startDate, endDate) => {
        let date = dayjs(startDate.dateInstance).format(format);
        date +=
          endDate !== undefined
            ? " - " + dayjs(endDate.dateInstance).format(format)
            : "";
        props.onChange(date);
      });
    },
  });
};

const reInit = (el, props) => {
  el.litePickerInstance.destroy();
  init(el, props);
};

export { setValue, init, reInit };
