import dom from "@left4code/tw-starter/dist/js/dom";
import TomSelect from "tom-select";
import _, { clone } from "lodash";

const setValue = (el, props) => {
  if (props.value.length) {
    dom(el).val(props.value);
  }
};

const init = (originalEl, clonedEl, props, computedOptions) => {
  // On option add
  if (Array.isArray(props.value)) {
    computedOptions = {
      onOptionAdd: function (value) {
        // Add new option
        const newOption = document.createElement("option");
        newOption.value = value;
        newOption.text = value;
        originalEl.add(newOption);

        // Emit option add
        props.onOptionAdd(value);
      },
      ...computedOptions,
    };
  }

  clonedEl.TomSelect = new TomSelect(clonedEl, computedOptions);

  // On change
  clonedEl.TomSelect.on("change", function (selectedItems) {
    props.onChange(
      Array.isArray(selectedItems) ? [...selectedItems] : selectedItems
    );
  });
};

const getOptions = (options, tempOptions = []) => {
  options.each(function (optionKey, optionEl) {
    if (optionEl instanceof HTMLOptGroupElement) {
      getOptions(dom(optionEl).children(), tempOptions);
    } else {
      tempOptions.push(optionEl);
    }
  });

  return tempOptions;
};

const updateValue = (originalEl, clonedEl, value, props, computedOptions) => {
  // Remove old options
  for (const [optionKey, option] of Object.entries(
    clonedEl.TomSelect.options
  )) {
    if (
      !getOptions(dom(clonedEl).prev().children()).filter((optionEl) => {
        return optionEl.value === option.value;
      }).length
    ) {
      clonedEl.TomSelect.removeOption(option.value);
    }
  }

  // Add new options
  dom(clonedEl)
    .prev()
    .children()
    .each(function () {
      clonedEl.TomSelect.addOption({
        text: dom(this).text(),
        value: dom(this).attr("value"),
      });
    });

  // Refresh options
  clonedEl.TomSelect.refreshOptions(false);

  // Update value
  if (
    (!Array.isArray(value) && value !== clonedEl.TomSelect.getValue()) ||
    (Array.isArray(value) && !_.isEqual(value, clonedEl.TomSelect.getValue()))
  ) {
    clonedEl.TomSelect.destroy();
    dom(clonedEl).html(dom(clonedEl).prev().html());
    setValue(clonedEl, props);
    init(originalEl, clonedEl, props, computedOptions);
  }
};

export { setValue, init, updateValue };
