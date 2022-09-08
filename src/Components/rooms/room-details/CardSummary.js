import { Card } from "antd";
import React from "react";
import { Button } from "antd";
import { DatePicker, InputNumber } from "antd";

const { RangePicker } = DatePicker;

export default function CardSummary({
  room,
  onChangeCalendar,
  onChangeInput,
  onSubmit,
}) {
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
          <RangePicker
            onChange={(e) => {
              onChangeCalendar(
                e[0].format("YYYY-MM-DD"),
                e[1].format("YYYY-MM-DD")
              );
            }}
          />
        </div>
        <InputNumber
          style={{ width: 165 }}
          min={1}
          max={10}
          defaultValue='Number of trawellers'
          onChange={onChangeInput}
          name='numberOfTrawellers'
          placeholder='Number of trawellers'
        />
        <h3 style={{ marginTop: "20px" }}>
          Total price: {room.location?.price}$
        </h3>
        <Button
          onClick={onSubmit}
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
