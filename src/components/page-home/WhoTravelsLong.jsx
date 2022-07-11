import { Button, Dropdown, Menu } from "antd";
import React from "react";
import NumberInput from "./NumberInput";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h5 style={{ paddingRight: 10 }}>Adults</h5>
            <NumberInput />
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h5 style={{ paddingRight: 10 }}>Kids</h5>
            <NumberInput />
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h5 style={{ paddingRight: 10 }}>Babies</h5>
            <NumberInput />
          </div>
        ),
      },
      {
        key: "4",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h5 style={{ paddingRight: 10 }}>Pets</h5>
            <NumberInput />
          </div>
        ),
      },
    ]}
  />
);

const WhoTravelsLong = () => (
  <Dropdown overlay={menu} placement="bottom" arrow>
    <Button style={{ width: "100%" }}>Who travels?</Button>
  </Dropdown>
);

export default WhoTravelsLong;
