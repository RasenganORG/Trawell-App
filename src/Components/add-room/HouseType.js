import { Select } from "antd";
import React from "react";
const { Option } = Select;

const onSearch = (value) => {
  console.log("search:", value);
};

const HouseType = (props) => {
  const { onChangeSelect } = props;
  return (
    <Select
      showSearch
      placeholder='What kind of place you are listing'
      optionFilterProp='children'
      style={{
        margin: 8,
        width: "400px",
      }}
      onChange={(value) => onChangeSelect(value, "placeType")}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toUpperCase().includes(input.toUpperCase())
      }
    >
      <Option value='Apartment'>Apartment</Option>
      <Option value='House'>House</Option>
      <Option value='Boutique hotel'>Boutique Hotel</Option>
      <Option value='Hotel'>Hotel</Option>
    </Select>
  );
};

export default HouseType;
