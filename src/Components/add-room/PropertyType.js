import { Select } from "antd";
import React from "react";
const { Option } = Select;

const onSearch = (value) => {
  console.log("search:", value);
};

const PropertyType = (props) => {
  return (
    <Select
      showSearch
      placeholder='Select property type'
      optionFilterProp='children'
      style={{
        margin: 8,
        width: "400px",
      }}
      onChange={(value) => props.onChangeSelect(value, "propertyType")}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      <Option value='House'>House</Option>
      <Option value='Bungalow'>Bungalow</Option>
      <Option value='Cabin'>Cabin</Option>
      <Option value='Chalet'>Chalet</Option>
      <Option value='Cottage'>Cottage</Option>
    </Select>
  );
};

export default PropertyType;
