import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomById, reset } from "./roomSlice";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocation } from "@fortawesome/free-solid-svg-icons";
import CardAmenities from "./room-details/CardAmenities";
import CardSummary from "./room-details/CardSummary";
import { useNavigate } from "react-router-dom";
import { addBooking } from "../profile/bookingSlice";

const RoomDetail = () => {
  const { isLoading, isError, isSuccess, message, room } = useSelector(
    (state) => state.roomState
  );

  const { user } = useSelector((state) => state.auth);

  console.log("room is", room);
  const { location } = room;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  console.log("user in room detail", user, { params });

  const [bookingData, setBookingData] = useState({
    startDate: "",
    endDate: "",
    numberOfTrawellers: "",
    price: "",
    userId: "",
    locationId: "",
  });

  const { startDate, endDate, numberOfTrawellers, price, userId, locationId } =
    bookingData;

  const onChangeInput = (value) => {
    setBookingData((prevState) => ({
      ...prevState,
      ["numberOfTrawellers"]: value,
    }));
  };

  const onChangeCalendar = (startDate, endDate) => {
    setBookingData((prevState) => ({
      ...prevState,
      startDate: startDate,
      endDate: endDate,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      startDate,
      endDate,
      numberOfTrawellers,
      price,
      userId: user.id,
      locationId: params.roomId,
    };
    dispatch(addBooking(bookingData));
    console.log("You booked a room");
    navigate("/");
  };

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
            <CardSummary
              room={room}
              onChangeCalendar={onChangeCalendar}
              onChangeInput={onChangeInput}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
