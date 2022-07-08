import { Input, Radio, Space } from "antd";
import React, { useState } from "react";

const BathroomPrivate = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        width: "900px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "lighter",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h4
        style={{
          fontWeight: "lighter",
          marginRight: 120,
          marginLeft: 10,
        }}
      >
        Are the bathrooms private?
      </h4>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="horizontal" style={{ marginLeft: 10 }}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default BathroomPrivate;
