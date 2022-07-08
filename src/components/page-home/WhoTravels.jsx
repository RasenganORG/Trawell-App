import { Button, Dropdown, Menu } from "antd";
import React from "react";
import IncDecCounter from "./IncDecCounter";

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

const WhoTravels = () => (
  <Dropdown overlay={menu} placement="bottom" arrow>
    <Button className="guests">Who travels?</Button>
  </Dropdown>
);

export default WhoTravels;
