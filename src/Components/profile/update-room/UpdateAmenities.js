import { Checkbox } from "antd";

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

const UpdateAmenities = (props) => {
  console.log("checked array", props.defaultValue);
  return (
    <>
      <Checkbox.Group
        options={options}
        value={props.defaultValue}
        onChange={(value) => props.onChangeCheckbox(value)}
      />
    </>
  );
};

export default UpdateAmenities;
