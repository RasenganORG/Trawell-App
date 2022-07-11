import { Cascader } from "antd";
import React from "react";
import NumberInput from "./NumberInput";
const options = [
  {
    value: "adults",
    label: "Adults",
    children: [
      {
        value: "inputAdults",
        label: <NumberInput />,
      },
    ],
  },
  {
    value: "kids",
    label: "Kids",
    children: [
      {
        value: "inputKids",
        label: <NumberInput />,
      },
    ],
  },
];

const onChange = (value) => {
  console.log(value);
};

const CascaderButton = () => (
  <Cascader
    style={{ width: "150px" }}
    options={options}
    onChange={onChange}
    placeholder="Who travels?"
  />
);

export default CascaderButton;
