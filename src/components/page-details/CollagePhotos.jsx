import { Col, Row, Divider } from "antd";
import imageMain from "../../images/collage/main-1.png";
import imageS1 from "../../images/collage/second-1.png";
import imageS2 from "../../images/collage/second-2.png";
import imageS3 from "../../images/collage/second-3.png";
import imageS4 from "../../images/collage/second-4.png";

export default function CollagePhotos() {
  return (
    <Row
      style={{
        marginTop: "30px",
        marginBottom: "20px",
        marginLeft: "20%",
        width: "60%",
      }}
    >
      <Col span={12}>
        <img
          src={imageMain}
          style={{
            width: "100%",
            padding: 3,
            height: "100%",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        ></img>
      </Col>
      <Col span={12}>
        <Row>
          <Col span={12}>
            <img
              src={imageS1}
              style={{
                width: "100%",
                padding: 3,
                height: "100%",
              }}
            ></img>
          </Col>
          <Col span={12}>
            <img
              src={imageS2}
              style={{
                width: "100%",
                padding: 3,
                height: "100%",
                borderTopRightRadius: 15,
              }}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <img
              src={imageS3}
              style={{ width: "100%", padding: 3, height: "100%" }}
            ></img>
          </Col>
          <Col span={12}>
            <img
              src={imageS4}
              style={{
                width: "100%",
                padding: 3,
                height: "100%",
                borderBottomRightRadius: 15,
              }}
            ></img>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
