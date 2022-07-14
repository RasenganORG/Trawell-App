import { Card } from "antd";
import React from "react";
import { Button, Dropdown } from "antd";
import CheckIn from "../page-home/CheckIn";
import WhoTravelsLong from "../page-home/WhoTravelsLong";

export default function CardSummary() {
  return (
    <>
      <Card
        hoverable
        title="180$/night"
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
          <Dropdown overlay={CheckIn} placement="bottom" arrow>
            <Button>Checkin 10.08.2022</Button>
          </Dropdown>
          <Dropdown overlay={CheckIn} placement="bottom" arrow>
            <Button>Checkout 18.08.2022</Button>
          </Dropdown>
        </div>
        <WhoTravelsLong />
        <h3 style={{ marginTop: "20px" }}>Total price: 592$</h3>
        <Button
          style={{
            marginTop: 25,
            marginBottom: 25,
            backgroundColor: "#c7027c",
            border: "none",
            borderRadius: 5,
            marginLeft: "25%",
            width: "50%",
          }}
          type="primary"
        >
          Reserve
        </Button>
      </Card>
    </>
  );
}
