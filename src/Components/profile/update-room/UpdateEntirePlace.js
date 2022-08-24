import { Select } from "antd";
const { Option } = Select;

const onSearch = (value) => {};

const UpdateEntirePlace = (props) => {
  return (
    <Select
      value={props.defaultValue ? props.defaultValue : ""}
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

export default UpdateEntirePlace;
