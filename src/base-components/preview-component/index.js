import {
  createContext,
  createElement,
  createRef,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";
import { Lucide } from "@/base-components";
import jsBeautify from "js-beautify";
import hljs from "highlight.js";
import _ from "lodash";
import classnames from "classnames";
import PropTypes from "prop-types";

// Preview coomponent wrapper
const previewCodeContext = createContext();
function PreviewComponent(props) {
  const [previewCode, setPreviewCode] = useState(true);
  return createElement(
    previewCodeContext.Provider,
    {
      value: previewCode,
    },
    createElement(
      "div",
      {
        className: props.className,
      },
      typeof props.children === "function"
        ? props.children({
            toggle: () => {
              setPreviewCode(!previewCode);
            },
          })
        : props.children
    )
  );
}

// Preview
function Preview(props) {
  const previewCode = useContext(previewCodeContext);
  return previewCode ? createElement("div", {}, props.children) : "";
}

// Source
function Source(props) {
  const previewCode = useContext(previewCodeContext);
  return !previewCode ? createElement("div", {}, props.children) : "";
}

// Highlight
function Highlight(props) {
  const [copyText, setCopyText] = useState("Copy example code");
  const highlightRef = createRef();
  const copySourceEl = createRef();
  const [copySource, setCopySource] = useState("");

  useEffect(() => {
    let source = dom(highlightRef.current).find("code").html();

    // Format for beautify
    source = _.replace(source, /&lt;/g, "<");
    source = _.replace(source, /&gt;/g, ">");

    // Beautify code
    source = jsBeautify.html(source);

    // Save for copy code function
    setCopySource(source);

    // Format for highlight.js
    source = _.replace(source, /</g, "&lt;");
    source = _.replace(source, />/g, "&gt;");

    dom(highlightRef.current).find("code").html(source);

    hljs.highlightElement(dom(highlightRef.current).find("code")[0]);
  }, []);

  return createElement("div", {}, [
    props.copyButton
      ? createElement(
          "button",
          {
            key: "highlight-button",
            className: `btn py-1 px-2 btn-outline-secondary ${props.className}`,
            onClick(event) {
              setCopyText("Copied!");
              setTimeout(() => {
                setCopyText("Copy example code");
              }, 1500);

              copySourceEl.current.select();
              copySourceEl.current.setSelectionRange(0, 99999);
              document.execCommand("copy");
            },
          },
          [
            createElement(Lucide, {
              icon: "File",
              key: "highlight-button-icon",
              className: "w-4 h-4 mr-2",
            }),
            copyText,
          ]
        )
      : "",
    createElement(
      "div",
      {
        ref: highlightRef,
        key: "highlight-content",
        className: classnames({
          "rounded-md overflow-hidden relative": true,
          "mt-3": props.copyButton,
          [props.className]: !props.copyButton,
        }),
      },
      createElement(
        "pre",
        {
          className:
            "source-preview !static overflow-y-auto !px-[16px] !py-[15px]",
        },
        [
          createElement(
            "code",
            {
              key: "source-preview-code",
              className: `!-mb-[60px] !inline ${props.type}`,
            },
            props.children
          ),
          createElement("textarea", {
            key: "source-preview-textarea",
            ref: copySourceEl,
            value: copySource,
            onChange: () => {},
            className: "absolute w-0 h-0 p-0",
          }),
        ]
      )
    ),
  ]);
}

Highlight.propTypes = {
  copyButton: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Highlight.defaultProps = {
  copyButton: true,
  type: "html",
  className: "",
};

export { PreviewComponent, Preview, Source, Highlight };
