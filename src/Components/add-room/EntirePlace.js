import { Select } from "antd";
import React from "react";
const { Option } = Select;

const onSearch = (value) => {};

const EntirePlace = (props) => {
  return (
    <Select
      showSearch
      placeholder='What will guests have?'
      optionFilterProp='children'
      style={{
        margin: 8,
        width: "400px",
      }}
      onChange={(value) => props.onChangeSelect(value, "roomType")}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      <Option value='Entire place'>Entire place</Option>
      <Option value='Private room'>Private room</Option>
      <Option value='Shared room'>Shared room</Option>
    </Select>
  );
};

export default EntirePlace;
