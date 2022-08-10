import React from "react";
import { Input, Space } from "antd";

import { useNavigate } from "react-router-dom";

const SearchComp = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const onSearch = (value) => {
    navigate(`search/${value}`);
  };
  return (
    <div>
      <Space direction='horizontal'>
        <Search
          placeholder='Find a place'
          allowClear
          enterButton='Search'
          size='large'
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

export default SearchComp;
