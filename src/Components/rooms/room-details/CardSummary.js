import { Card } from "antd";
import React from "react";
import { Button } from "antd";
import { DatePicker, InputNumber } from "antd";

const { RangePicker } = DatePicker;

const onChange = (value) => {
  console.log("changed", value);
};

export default function CardSummary(props) {
  const { room } = props;

  return (
    <>
      <Card
        hoverable
        title='Trawell here'
        style={{
          borderRadius: 15,
          marginTop: 15,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <RangePicker />
        </div>
        <InputNumber
          style={{ width: 165 }}
          min={1}
          max={10}
          defaultValue='Number of trawellers'
          onChange={onChange}
          placeholder='Number of trawellers'
        />
        <h3 style={{ marginTop: "20px" }}>
          Total price: {room.location?.price}$
        </h3>
        <Button
          style={{
            backgroundColor: "#c7027c",
            border: "none",
            borderRadius: 5,
          }}
          type='primary'
        >
          Reserve
        </Button>
      </Card>
    </>
  );
}
