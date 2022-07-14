import React from "react";
import { Link } from "react-router-dom";
import cardOne from "../../images/travel-images/caption.jpg";
import { Rate, Card, Badge } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heart from "./Heart";

const { Meta } = Card;

const CardElement = (altkey) => {
  return (
    <Link to="/place-detail">
      <Badge.Ribbon
        style={{ margin: 0, marginRight: 30 }}
        text="Top rated"
        color="pink"
        altkey={`${altkey}-rib`}
      >
        <Card
          hoverable
          style={{
            width: 300,
            borderRadius: 20,
            margin: 30,
          }}
          cover={
            <img
              style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              alt="example"
              src={cardOne}
              altkey={`${altkey}-img`}
            />
          }
        >
          <h4 className="star-icon">
            4.75
            <FontAwesomeIcon size="sm" icon={faStar} />
          </h4>
          <Meta title="Santorini, Greece" description="Private host" />
          <h5>Available date: 10 Nov - 15 Dec</h5>
          <h4>180$/night</h4>
          <Rate style={{ color: "#c7027c" }} />
          <Heart />
        </Card>
      </Badge.Ribbon>
    </Link>
  );
};

export default CardElement;
