import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomById, reset } from "./roomSlice";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocation } from "@fortawesome/free-solid-svg-icons";
import CardAmenities from "./room-details/CardAmenities";
import CardSummary from "./room-details/CardSummary";

const RoomDetail = () => {
  const { isLoading, room } = useSelector((state) => state.roomState);
  const { location } = room;
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getRoomById(params.roomId));
  }, [dispatch, params]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 70,
          margin: "auto",
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: "55%",
          }}
        >
          <img
            style={{
              width: 700,
            }}
            alt='example'
            src={`/${location?.photos}`}
          />
          <div
            style={{
              display: "flex",
              flex: "row",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <h5 style={{ marginRight: 10 }}>
              <FontAwesomeIcon style={{ marginRight: 1 }} icon={faStar} /> 4.75
              Super host
            </h5>
            <h4>
              <FontAwesomeIcon icon={faLocation} />
              {location?.country}, {location?.city}
            </h4>
          </div>
          <p style={{ width: 700 }}>{location?.description}</p>
          <div
            style={{
              display: "flex",
              width: 700,
              margin: "auto",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <CardAmenities room={room} />
            <CardSummary room={room} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
