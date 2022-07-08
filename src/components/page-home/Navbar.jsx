import React from "react";
import { Button, Dropdown, Tooltip, Layout } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import Logo from "../../images/logo.png";

import CheckIn from "./CheckIn";
import Search from "./Search";
import WhoTravels from "./WhoTravels";
import UserAcc from "./UserAcc";

const { Header } = Layout;

const Navbar = () => (
  <Header
    className="header"
    style={{
      margin: 0,
      backgroundColor: "white",
      boxShadow: "5px 8px 5px 3px rgba(200, 200, 200, 0.3)",
      height: "90px",
    }}
  >
    <Link to="/home">
      <img className="logo" src={Logo} />
    </Link>
    <div className="middle-buttons">
      <Dropdown overlay={CheckIn} placement="bottom" arrow>
        <Button className="checkin">Checkin</Button>
      </Dropdown>
      <Dropdown overlay={CheckIn} placement="bottom" arrow>
        <Button>Checkout</Button>
      </Dropdown>
      <Search />
      <WhoTravels />
      <Tooltip title="Find your place">
        <Link to="/search-result">
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            style={{
              margin: "5px",
              color: "white",
              backgroundColor: "#c7027c",
              border: "transparent",
            }}
          />
        </Link>
      </Tooltip>
    </div>
    <div className="user">
      <Button
        href="http://localhost:3000/register-host"
        className="button-host"
      >
        Become a host
      </Button>
      <UserAcc />
    </div>
  </Header>
);

export default Navbar;
