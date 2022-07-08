import { Select } from "antd";
import React from "react";
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

const HouseType = () => {
  return (
    <Select
      showSearch
      placeholder="What kind of place you are listing"
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
      <Option value="apartment">Apartment</Option>
      <Option value="house">House</Option>
      <Option value="boutique hotel">Boutique Hotel</Option>
      <Option value="hotel">Hotel</Option>
    </Select>
  );
};

export default HouseType;
