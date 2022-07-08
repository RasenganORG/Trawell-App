import { InputNumber } from "antd";
import React from "react";

const onChange = (value) => {
  console.log("changed", value);
};

const Beds = () => (
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
      How many beds?
    </h4>
    <InputNumber
      style={{ width: "60px", marginLeft: 235 }}
      min={1}
      max={10}
      defaultValue={1}
      onChange={onChange}
    />
  </div>
);

export default Beds;
