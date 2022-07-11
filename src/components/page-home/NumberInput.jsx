import { InputNumber } from "antd";
import React from "react";

const onChange = (value) => {
  console.log("changed", value);
};

const NumberInput = () => (
  <InputNumber
    style={{ width: "70px" }}
    min={1}
    max={10}
    defaultValue={3}
    onChange={onChange}
  />
);

export default NumberInput;
