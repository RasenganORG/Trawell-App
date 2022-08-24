import { InputNumber } from "antd";
import React from "react";

const UpdateBathrooms = (props) => (
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
      How many bathrooms?
    </h4>
    <InputNumber
      style={{ width: "60px", marginLeft: 200 }}
      min={1}
      max={10}
      value={props.defaultValue ? props.defaultValue : ""}
      onChange={(value) => props.onChangeSelect(value, "nrOfBathrooms")}
    />
  </div>
);

export default UpdateBathrooms;
