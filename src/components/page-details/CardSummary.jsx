import { Card } from "antd";
import React from "react";
import { Button, Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import CheckIn from "../page-home/CheckIn";
import WhoTravels from "../page-home/WhoTravels";
import WhoTravelsLong from "../page-home/WhoTravelsLong";

export default function CardSummary() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <h5>Adults</h5>,
        },
        {
          key: "2",
          label: <h5>Kids</h5>,
        },
        {
          key: "3",
          label: <h5>Babies</h5>,
        },
        {
          key: "4",
          label: <h5>Pets</h5>,
        },
      ]}
    />
  );

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
