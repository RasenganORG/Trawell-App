import { InputNumber } from "antd";

const UpdateNumOfGuests = (props) => {
  console.log("props in num of guests is:", props);
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
        value={props.defaultValue ? props.defaultValue : ""}
        onChange={(value) => props.onChangeSelect(value, "nrOfGuests")}
      />
    </div>
  );
};

export default UpdateNumOfGuests;
