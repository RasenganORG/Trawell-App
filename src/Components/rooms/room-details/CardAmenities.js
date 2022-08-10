import { Card, Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function CardAmenities(props) {
  const [firstCol, setFirstCol] = useState([]);
  const [secondCol, setSecondCol] = useState([]);
  const { room } = props;
  const { amenities } = room;

  useEffect(() => {
    if (room) {
      const half = Math.ceil(room.amenities.length / 2);
      setFirstCol(amenities.slice(0, half));
      setSecondCol(amenities.slice(half));
    }
  }, [room]);

  return (
    <div>
      <Card
        title='This place offers:'
        bordered={true}
        style={{
          width: 320,
        }}
      >
        <Row>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
            }}
          >
            {firstCol.map((amenity, id) => (
              <div id={id} style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  id={id}
                  size='sm'
                  style={{ color: "black" }}
                  icon={faCheck}
                />
                <p id={id} style={{ margin: 0, marginLeft: "7px" }}>
                  {amenity}
                </p>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            ></div>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
            }}
          >
            <div>
              {secondCol.map((amenity, id) => (
                <div id={id} style={{ display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon
                    id={id}
                    size='sm'
                    style={{ color: "black" }}
                    icon={faCheck}
                  />
                  <p id={id} style={{ margin: 0, marginLeft: "7px" }}>
                    {amenity}
                  </p>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
