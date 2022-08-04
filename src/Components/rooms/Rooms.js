import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heart from "./Heart";
import { getAllRooms } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../Spinner";
import { Layout, Row, Card, Badge, Rate } from "antd";

const { Meta } = Card;

export default function Rooms() {
  const { rooms, isLoading } = useSelector((state) => state.roomState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const cardEl = (room, id) => {
    const { location, placeType, photos } = room;

    return (
      <div key={id} style={{ width: 300, margin: "auto", marginTop: 50 }}>
        <Badge.Ribbon text='Top rated' color='pink'>
          <Card
            hoverable
            style={{
              borderRadius: 20,
            }}
            cover={
              <img
                style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                alt='example'
                src={`${photos}`}
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
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Row gutter={[24, 24]}>
        {rooms
          ? rooms.map((room, id) => {
              return cardEl(room, id);
            })
          : "No room added yet"}
      </Row>
    </Layout>
  );
}
