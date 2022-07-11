import { Col, Row } from "antd";
import React from "react";
import imageMain from "../../images/collage/main-1.png";

const GridUploads = () => (
  <>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>
          <img style={{ width: "200px" }} src={imageMain} />
        </div>
      </Col>
    </Row>
  </>
);

export default GridUploads;
