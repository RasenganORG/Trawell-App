import { Radio, Space } from "antd";

const BathroomPrivate = (props) => {
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
      <Radio.Group onChange={(value) => props.onRadioSelect(value)}>
        <Space direction='horizontal' style={{ marginLeft: 10 }}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default BathroomPrivate;
