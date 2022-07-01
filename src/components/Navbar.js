import React from "react";
import { Layout } from "antd";
import { Button, Dropdown } from "antd";
import Logo from "../images/logo.png";
import "antd/dist/antd.css";
import "../app.css";
import CheckIn from "./CheckIn";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const { Header } = Layout;

const Navbar = () => (
  <Header
    className="header"
    style={{
      backgroundColor: "white",
      boxShadow: "5px 8px 5px 3px rgba(200, 200, 200, 0.3)",
      height: "80px",
    }}
  >
    <img className="logo" src={Logo} />

    <div className="middle-buttons">
      <Dropdown overlay={CheckIn} placement="bottom" arrow>
        <Button className="checkin">Checkin</Button>
      </Dropdown>
      <Dropdown overlay={CheckIn} placement="bottom" arrow>
        <Button>Checkout</Button>
      </Dropdown>
      <Search />
      <Dropdown className="guests" overlay={CheckIn} placement="bottom" arrow>
        <Button>Who travels?</Button>
      </Dropdown>
    </div>
    <div className="user">
      <Button>Become a host</Button>
      <FontAwesomeIcon size="2x" className="user-icon" icon={faUserCircle} />
    </div>
  </Header>
);

export default Navbar;
