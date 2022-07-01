import React from "react";
import { Layout } from "antd";
import { Col, Divider, Row } from "antd";
import "../app.css";
import "antd/dist/antd.css";

const { Content } = Layout;

const style = {
  background: "grey",
  padding: "120px 20px",
};

const Cards = () => (
  <Content className="site-layout-content">
    <Divider orientation="left"></Divider>
    <Row gutter={[45, 30]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </Content>
);

export default Cards;
