import Dropzone from "dropzone";

const init = (el, props) => {
  Dropzone.autoDiscover = false;
  el.dropzone = new Dropzone(el, props.options);
};

export { init };
