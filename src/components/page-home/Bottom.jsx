import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Footer } = Layout;

const Bottom = () => (
  <Footer
    style={{
      textAlign: "center",
      background: "white",
    }}
  >
    Trawell ©2022 Created by EDW
  </Footer>
);

export default Bottom;
