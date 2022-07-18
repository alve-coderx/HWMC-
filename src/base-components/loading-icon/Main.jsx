import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import PropTypes from "prop-types";

function LoadingIcon(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const iconColor = useMemo(() => {
    return !darkMode ? props.color : "#ffffff";
  });
  const { icon, color, ...computedProps } = props;
  return (
    <span {...computedProps}>
      {(() => {
        if (icon == "audio") {
          return (
            <svg
              width="15"
              viewBox="0 0 55 80"
              xmlns="http://www.w3.org/2000/svg"
              fill={iconColor}
              className="w-full h-full"
            >
              <g transform="matrix(1 0 0 -1 0 80)">
                <rect width="10" height="20" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="4.3s"
                    values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="15" width="10" height="80" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="2s"
                    values="80;55;33;5;75;23;73;33;12;14;60;80"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="30" width="10" height="50" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="1.4s"
                    values="50;34;78;23;56;23;34;76;80;54;21;50"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="45" width="10" height="30" rx="3">
                  <animate
                    attributeName="height"
                    begin="0s"
                    dur="2s"
                    values="30;45;13;80;56;72;45;76;34;23;67;30"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            </svg>
          );
        } else if (icon == "ball-triangle") {
          return (
            <svg
              width="20"
              viewBox="0 0 57 57"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)">
                  <circle cx="5" cy="50" r="5" fill={iconColor}>
                    <animate
                      attributeName="cy"
                      begin="0s"
                      dur="2.2s"
                      values="50;5;50;50"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cx"
                      begin="0s"
                      dur="2.2s"
                      values="5;27;49;5"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="27" cy="5" r="5" fill={iconColor}>
                    <animate
                      attributeName="cy"
                      begin="0s"
                      dur="2.2s"
                      from="5"
                      to="5"
                      values="5;50;50;5"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cx"
                      begin="0s"
                      dur="2.2s"
                      from="27"
                      to="27"
                      values="27;49;5;27"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="49" cy="50" r="5" fill={iconColor}>
                    <animate
                      attributeName="cy"
                      begin="0s"
                      dur="2.2s"
                      values="50;50;5;50"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cx"
                      from="49"
                      to="49"
                      begin="0s"
                      dur="2.2s"
                      values="49;5;27;49"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          );
        } else if (icon == "bars") {
          return (
            <svg
              width="20"
              viewBox="0 0 135 140"
              xmlns="http://www.w3.org/2000/svg"
              fill={iconColor}
              className="w-full h-full"
            >
              <rect y="10" width="15" height="120" rx="6">
                <animate
                  attributeName="height"
                  begin="0.5s"
                  dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  begin="0.5s"
                  dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="30" y="10" width="15" height="120" rx="6">
                <animate
                  attributeName="height"
                  begin="0.25s"
                  dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  begin="0.25s"
                  dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="60" width="15" height="140" rx="6">
                <animate
                  attributeName="height"
                  begin="0s"
                  dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  begin="0s"
                  dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="90" y="10" width="15" height="120" rx="6">
                <animate
                  attributeName="height"
                  begin="0.25s"
                  dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  begin="0.25s"
                  dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="120" y="10" width="15" height="120" rx="6">
                <animate
                  attributeName="height"
                  begin="0.5s"
                  dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  begin="0.5s"
                  dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          );
        } else if (icon == "circles") {
          return (
            <svg
              width="20"
              viewBox="0 0 135 135"
              xmlns="http://www.w3.org/2000/svg"
              fill={iconColor}
              className="w-full h-full"
            >
              <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 67 67"
                  to="-360 67 67"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 67 67"
                  to="360 67 67"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          );
        } else if (icon == "grid") {
          return (
            <svg
              width="20"
              viewBox="0 0 105 105"
              xmlns="http://www.w3.org/2000/svg"
              fill={iconColor}
              className="w-full h-full"
            >
              <circle cx="12.5" cy="12.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="12.5" cy="52.5" r="12.5" fillOpacity=".5">
                <animate
                  attributeName="fill-opacity"
                  begin="100ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="52.5" cy="12.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="300ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="52.5" cy="52.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="600ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="92.5" cy="12.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="800ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="92.5" cy="52.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="400ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="12.5" cy="92.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="700ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="52.5" cy="92.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="500ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="92.5" cy="92.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="200ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          );
        } else if (icon == "hearts") {
          return (
            <svg
              width="30"
              viewBox="0 0 140 64"
              xmlns="http://www.w3.org/2000/svg"
              fill={iconColor}
              className="w-full h-full"
            >
              <path
                d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z"
                fillOpacity=".5"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.4s"
                  values="0.5;1;0.5"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z"
                fillOpacity=".5"
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0.7s"
                  dur="1.4s"
                  values="0.5;1;0.5"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
            </svg>
          );
        } else if (icon == "oval") {
          return (
            <svg
              width="25"
              viewBox="-2 -2 42 42"
              xmlns="http://www.w3.org/2000/svg"
              stroke={iconColor}
              className="w-full h-full"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="4">
                  <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          );
        } else if (icon == "puff") {
          return (
            <svg
              width="25"
              viewBox="0 0 44 44"
              xmlns="http://www.w3.org/2000/svg"
              stroke={iconColor}
              className="w-full h-full"
            >
              <g fill="none" fillRule="evenodd" strokeWidth="4">
                <circle cx="22" cy="22" r="1">
                  <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="0s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="1">
                  <animate
                    attributeName="r"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          );
        } else if (icon == "rings") {
          return (
            <svg
              width="30"
              viewBox="0 0 45 45"
              xmlns="http://www.w3.org/2000/svg"
              stroke={iconColor}
              className="w-full h-full"
            >
              <g
                fill="none"
                fillRule="evenodd"
                transform="translate(1 1)"
                strokeWidth="3"
              >
                <circle cx="22" cy="22" r="6" strokeOpacity="0">
                  <animate
                    attributeName="r"
                    begin="1.5s"
                    dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="1.5s"
                    dur="3s"
                    values="1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="strokeWidth"
                    begin="1.5s"
                    dur="3s"
                    values="2;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="6" strokeOpacity="0">
                  <animate
                    attributeName="r"
                    begin="3s"
                    dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="3s"
                    dur="3s"
                    values="1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="strokeWidth"
                    begin="3s"
                    dur="3s"
                    values="2;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="8">
                  <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.5s"
                    values="6;1;2;3;4;5;6"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          );
        } else if (icon == "spinning-circles") {
          return (
            <svg
              width="20"
              viewBox="0 0 58 58"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(2 1)"
                  stroke={iconColor}
                  strokeWidth="1.5"
                >
                  <circle
                    cx="42.601"
                    cy="11.462"
                    r="5"
                    fillOpacity="1"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="1;0;0;0;0;0;0;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="49.063"
                    cy="27.063"
                    r="5"
                    fillOpacity="0"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;1;0;0;0;0;0;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="42.601"
                    cy="42.663"
                    r="5"
                    fillOpacity="0"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;0;1;0;0;0;0;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="27"
                    cy="49.125"
                    r="5"
                    fillOpacity="0"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;0;0;1;0;0;0;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="11.399"
                    cy="42.663"
                    r="5"
                    fillOpacity="0"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;0;0;0;1;0;0;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="4.938"
                    cy="27.063"
                    r="5"
                    fillOpacity="0"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;0;0;0;0;1;0;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="11.399"
                    cy="11.462"
                    r="5"
                    fillOpacity="0"
                    fill={iconColor}
                  >
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;0;0;0;0;0;1;0"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="27" cy="5" r="5" fillOpacity="0" fill={iconColor}>
                    <animate
                      attributeName="fill-opacity"
                      begin="0s"
                      dur="1.3s"
                      values="0;0;0;0;0;0;0;1"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          );
        } else if (icon == "tail-spin") {
          return (
            <svg
              width="20"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="8.042%"
                  y1="0%"
                  x2="65.682%"
                  y2="23.865%"
                >
                  <stop stopColor={iconColor} stopOpacity="0" offset="0%" />
                  <stop stopColor={iconColor} offset="100%" />
                  <stop
                    stopColor={iconColor}
                    stopOpacity=".631"
                    offset="63.146%"
                  />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)">
                  <path
                    id="Oval-2"
                    d="M36 18c0-9.94-8.06-18-18-18"
                    stroke="url(#a)"
                    strokeWidth="3"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <circle fill={iconColor} cx="36" cy="18" r="1">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          );
        } else if (icon == "three-dots") {
          return (
            <svg
              width="25"
              viewBox="0 0 120 30"
              xmlns="http://www.w3.org/2000/svg"
              fill={iconColor}
              className="w-full h-full"
            >
              <circle cx="15" cy="15" r="15">
                <animate
                  attributeName="r"
                  from="15"
                  to="15"
                  begin="0s"
                  dur="0.8s"
                  values="15;9;15"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  from="1"
                  to="1"
                  begin="0s"
                  dur="0.8s"
                  values="1;.5;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                <animate
                  attributeName="r"
                  from="9"
                  to="9"
                  begin="0s"
                  dur="0.8s"
                  values="9;15;9"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  from="0.5"
                  to="0.5"
                  begin="0s"
                  dur="0.8s"
                  values=".5;1;.5"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="105" cy="15" r="15">
                <animate
                  attributeName="r"
                  from="15"
                  to="15"
                  begin="0s"
                  dur="0.8s"
                  values="15;9;15"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  from="1"
                  to="1"
                  begin="0s"
                  dur="0.8s"
                  values="1;.5;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          );
        }
      })()}
    </span>
  );
}

LoadingIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
};

LoadingIcon.defaultProps = {
  icon: "",
  color: "#2d3748",
};

export default LoadingIcon;
