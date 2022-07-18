import React, { useState } from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";

import { menu } from "./items";

/**
 * Add your all dropdown categories here with unique key
 */
const categories = [
  {
    key: 1,
    content: "Monthly",
    value: "Yesterday",
  }
];

/**
 * Stylesheet using react-jss
 */
const useStyles = createUseStyles(() => ({
  container: {
    position: "absolute",
    right: 10,
    "& button": {
      color: "black",
      border: "1.5px solid #EDEEF1",
      width: 150,
      borderRadius: "15px",
    },
  },
}));

export const DropdownSelector = ({ fetchCustomData }) => {
  const classes = useStyles();

  // This state is used to track selected value from dropdown
  const [activeTimeFrame, setActiveTimeFrame] = useState(2);

  const handleDataFetching = (key, value) => {
    setActiveTimeFrame(key);
    /**
     * This function invokes when user selectes an item from dropdown,
     * you can call a function to fetch data with key or value
     * @here we called @function fetchCustomData(value)
     */
    fetchCustomData(value);
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-2 xl:gap-8">
      {
        categories.map((category,i) => {
          return (
            <button key={i} onClick={() => handleDataFetching(category.key, category.value)} className="m-0 text-right sm:text-left text-base font-bold text-gray-500">{category.content}</button>
          )
        })
      }
    </div>
  );
};

export default DropdownSelector