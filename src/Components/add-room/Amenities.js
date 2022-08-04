import { Checkbox } from "antd";
import React from "react";

const plainOptions = [
  "Kitchen",
  "Wifi",
  "TV",
  "Hairdrier",
  "Office",
  "Refrigerator",
  "Air conditioning",
];
const options = [
  {
    label: "Kitchen",
    value: "Kitchen",
  },
  {
    label: "Wifi",
    value: "Wifi",
  },
  {
    label: "Hairdrier",
    value: "Hairdrier",
  },
  {
    label: "Office",
    value: "Office",
  },
  {
    label: "Refrigerator",
    value: "Refrigerator",
  },
  {
    label: "Airconditioning",
    value: "Airconditioning",
  },
];

const Amenities = (props) => (
  <>
    <Checkbox.Group
      options={options}
      defaultValue={[""]}
      onChange={(value) => props.onChangeCheckbox(value)}
    />
  </>
);

export default Amenities;
