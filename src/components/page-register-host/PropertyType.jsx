import { Select } from "antd";
import React from "react";
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

const PropertyType = () => {
  return (
    <Select
      showSearch
      placeholder="Select property type"
      optionFilterProp="children"
      style={{
        margin: 8,
        width: "400px",
      }}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      <Option value="house">House</Option>
      <Option value="bungalow">Bungalow</Option>
      <Option value="cabin">Cabin</Option>
      <Option value="chalet">Chalet</Option>
      <Option value="cottage">Cottage</Option>
    </Select>
  );
};

export default PropertyType;
