import React from "react";
import { AutoComplete } from "antd";
import { useState } from "react";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Search = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <AutoComplete
      value={value}
      options={options}
      style={{
        width: 130,
      }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Where travel?"
    />
  );
};

export default Search;
