import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heart from "./Heart";
import { useNavigate } from "react-router-dom";
import { Card, Badge, Rate } from "antd";
import moment from "moment";

const { Meta } = Card;

export default function CardComp(props) {
  const { room, index } = props;
  const { location, placeType, id } = room;

  const navigate = useNavigate();

  return (
    <div key={index} style={{ width: 330, margin: 20 }}>
      <Badge.Ribbon style={{ margin: 0 }} text='Top rated' color='pink'>
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
                margin: 0,
              }}
              alt='example'
              src={`/${location.photos}`}
              onClick={() => {
                navigate(`/rooms/${id}`);
              }}
            />
          }
        >
          <h4 style={{ float: "right" }}>
            {(Math.random() * 5).toFixed(2)}
            <FontAwesomeIcon size='sm' icon={faStar} />
          </h4>
          <Meta
            title={`${location.country}, ${location.city}`}
            description={placeType}
          />
          <h5>
            Available: {moment(location.availableFrom).format("MMM Do YY")} -{" "}
            {moment(location.availableTo).format("MMM Do YY")}
          </h5>
          <h4>{location.price}$/night</h4>
          <Rate style={{ color: "#c7027c" }} />
          <Heart />
        </Card>
      </Badge.Ribbon>
    </div>
  );
}
