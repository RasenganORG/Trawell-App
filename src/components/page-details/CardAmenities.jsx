import { Card, Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitchenSet,
  faDesktop,
  faTvAlt,
  faPlug,
  faWifi,
  faSnowflake,
  faSnowman,
} from "@fortawesome/free-solid-svg-icons";

export default function CardAmenities() {
  const kitchen = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          size="sm"
          style={{ color: "black" }}
          icon={faKitchenSet}
        />
        <p style={{ margin: "0px 5px" }}>Kitchen</p>
      </div>
    );
  };
  const office = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          size="sm"
          style={{ color: "black" }}
          icon={faDesktop}
        />
        <p style={{ margin: "0px 5px" }}>Office</p>
      </div>
    );
  };
  const tv = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon size="sm" style={{ color: "black" }} icon={faTvAlt} />
        <p style={{ margin: "0px 5px" }}>TV</p>
      </div>
    );
  };
  const hairDryer = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon size="sm" style={{ color: "black" }} icon={faPlug} />
        <p style={{ margin: "0px 5px" }}>Hair dryer</p>
      </div>
    );
  };
  const wifi = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon size="sm" style={{ color: "black" }} icon={faWifi} />
        <p style={{ margin: "0px 5px" }}>Wifi</p>
      </div>
    );
  };
  const ac = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          size="sm"
          style={{ color: "black" }}
          icon={faSnowflake}
        />
        <p style={{ margin: "0px 5px" }}>Air conditioning</p>
      </div>
    );
  };
  const refrigerator = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          size="sm"
          style={{ color: "black" }}
          icon={faSnowflake}
        />
        <p style={{ margin: "0px 5px" }}>Refrigerator</p>
      </div>
    );
  };
  return (
    <div>
      <Card
        title="This place offers:"
        bordered={true}
        style={{
          width: 400,
        }}
      >
        <Row>
          <Col span={12}>
            {kitchen()}
            {office()}
            {tv()}
            {hairDryer()}
          </Col>
          <Col span={12}>
            {wifi()}
            {ac()}
            {refrigerator()}
          </Col>
        </Row>
      </Card>
    </div>
  );
}
