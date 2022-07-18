import { Chart } from "@/base-components";
import { colors } from "@/utils";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import { useMemo } from "react";

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const colorScheme = useRecoilValue(colorSchemeStore);

  const data = useMemo(() => {
    return {
      labels: ["05/13", "05/14", "05/15", "05/16", "05/17", "05/18", "05/19", "05/20", "05/21", "05/22", "05/23", "05/24", "05/25",
      "05/26", "05/27", "05/28", "05/29", "05/30", "05/31", "06/01", "06/02", "06/03", "06/04", "06/05", "06/06", "06/07", "06/08"],
      datasets: [
      /*  {
          label: "Hash Rate",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [0, 200, 250, 200, 500, 450, 850, 1050],
          backgroundColor: "#14b8a6",
        }, */
        {
          label: "Mined BTC",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [0.05776508, 0.06798416, 0.07831571, 0.08854545, 0.09868377, 0.11173344, 0.12627055, 0.14086692, 0.15548933, 0.16828953, 0.18281714, 0.19731096, 0.21189697,
            0.2290367, 0.24896194, 0.26892106, 0.28876013, 0.30842143, 0.32822868, 0.34804453, 0.36795817, 0.38795918, 0.40781566, 0.42749679, 0.44676425, 0.46633164, 0.485432  ],
          backgroundColor: "#f2a900",
        },
      ],
    };
  });

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: colors.slate["500"](0.8),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
            color: colors.slate["500"](0.8),
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            font: {
              size: 12,
            },
            color: colors.slate["500"](0.8),
            callback: function (value) {
              return "BTC-" + value;
            },
          },
          grid: {
            color: darkMode ? colors.slate["500"](0.3) : colors.slate["300"](),
            borderDash: [2, 2],
            drawBorder: false,
          },
        },
      },
    };
  });

  return (
    <Chart
      type="bar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
