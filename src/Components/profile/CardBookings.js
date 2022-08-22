import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const CardBookings = ({ bookings }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        onClick={() => navigate(`/rooms/${bookings.roomId}`)}
        hoverable
        style={{
          width: 220,
          margin: 10,
        }}
        cover={
          <img
            style={{ objectFit: "cover", height: 150 }}
            alt='example'
            src={`/${bookings.photo}`}
          />
        }
      >
        <Meta
          title={`${bookings.country}, ${bookings.city}`}
          description={`${bookings.startDate} to  ${bookings.endDate}`}
        />
        <h4 style={{ marginTop: 4 }}>{`Spent: ${bookings.price} $`}</h4>
      </Card>
    </div>
  );
};

export default CardBookings;
