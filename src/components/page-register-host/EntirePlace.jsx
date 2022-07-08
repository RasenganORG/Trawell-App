import { Select } from "antd";
import React from "react";
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

const EntirePlace = () => {
  return (
    <Select
      showSearch
      placeholder="What will guests have?"
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
      <Option value="entirePlace">Entire place</Option>
      <Option value="privateRoom">Private room</Option>
      <Option value="sharedRoom">Shared room</Option>
    </Select>
  );
};

export default EntirePlace;
