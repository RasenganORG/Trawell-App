import { InputNumber } from "antd";
import React from "react";

const onChange = (value) => {
  console.log("changed", value);
};

const NumberOfGuests = () => (
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
      marginBottom: 8,
    }}
  >
    <h4
      style={{
        fontWeight: "lighter",
      }}
    >
      How many guests can your place accomodate?
    </h4>
    <InputNumber
      style={{ width: "60px", marginLeft: 60 }}
      min={1}
      max={20}
      defaultValue={3}
      onChange={onChange}
    />
  </div>
);

export default NumberOfGuests;
