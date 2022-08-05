import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heart from "./Heart";

import { Card, Badge, Rate } from "antd";

const { Meta } = Card;

export default function CardComp(props) {
  const { room, index } = props;
  const { location, placeType } = room;

  return (
    <div key={index} style={{ width: 300, margin: "auto", marginTop: 50 }}>
      <Badge.Ribbon text='Top rated' color='pink'>
        <Card
          hoverable
          style={{
            borderRadius: 20,
          }}
          cover={
            <img
              style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                objectFit: "cover",
                height: 200,
              }}
              alt='example'
              src={`${location.photos}`}
            />
          }
        >
          <h4 style={{ float: "right" }}>
            4.5
            <FontAwesomeIcon size='sm' icon={faStar} />
          </h4>
          <Meta
            title={`${location.country},${location.city}`}
            description={placeType}
          />
          <h5>
            Available: {location.availableFrom} - {location.availableTo}
          </h5>
          <h4>{location.price}$/night</h4>
          <Rate style={{ color: "#c7027c" }} />
          <Heart />
        </Card>
      </Badge.Ribbon>
    </div>
  );
}
