import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomById, reset } from "./roomSlice";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocation, faHeart } from "@fortawesome/free-solid-svg-icons";
import CardAmenities from "./room-details/CardAmenities";
import CardSummary from "./room-details/CardSummary";
import { useNavigate } from "react-router-dom";
import { addBooking } from "../profile/bookingSlice";
import { toast } from "react-toastify";
import moment from "moment";
import GmapDetails from "../g-maps/GmapDetails";
import { Image } from "antd";

const RoomDetail = () => {
  const { isLoading, room } = useSelector((state) => state.rooms);

  const { user } = useSelector((state) => state.auth);
  const { location, likes, images } = room;
  console.log({ images });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [bookingData, setBookingData] = useState({
    startDate: "",
    endDate: "",
    numberOfTrawellers: "",
    price: "",
    userId: "",
    roomId: "",
    country: "",
    city: "",
    photo: "",
  });

  const { startDate, endDate, numberOfTrawellers } = bookingData;

  const onChangeInput = (value) => {
    setBookingData((prevState) => ({
      ...prevState,
      ["numberOfTrawellers"]: value,
    }));
  };

  const onChangeCalendar = (checkin, checkout) => {
    setBookingData((prevState) => ({
      ...prevState,
      startDate: checkin,
      endDate: checkout,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      startDate,
      endDate,
      numberOfTrawellers,
      price: room.location.price,
      userId: user.id,
      roomId: params.roomId,
      country: room.location.country,
      city: room.location.city,
      photo: room.location.photos,
    };
    dispatch(addBooking(bookingData));
    console.log("You booked a room");
    toast.info("Booking succesful");
    navigate("/");
  };

  useEffect(() => {
    dispatch(getRoomById(params.roomId));
  }, [dispatch, params]);

  if (isLoading) {
    return <Spinner />;
  }

  if (room)
    return (
      <div
        style={{
          width: 1900,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 70,
          marginLeft: 350,
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: "55%",
          }}
        >
          <Image.PreviewGroup>
            {images?.map((item) => {
              return <Image width={390} height={250} src={item} />;
            })}
          </Image.PreviewGroup>

          <div
            style={{
              display: "flex",
              flex: "row",
              justifyContent: "left",
              alignItems: "center",
              paddingLeft: 130,
            }}
          >
            <h5 style={{ marginRight: 10 }}>
              <FontAwesomeIcon style={{ marginRight: 1 }} icon={faHeart} />
              {"  "}
              {likes}
              {"  "}Super host
            </h5>
            <h4>
              <FontAwesomeIcon icon={faLocation} />
              {location.country}, {location.city}
            </h4>

            <h3 style={{ width: 300 }}>{location.listingName}</h3>
          </div>

          <p style={{ width: 910, paddingLeft: 130 }}>{location.description}</p>
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
          <br />
          <div style={{ paddingLeft: 170 }}>
            <GmapDetails props={room.location.coord} />
          </div>

          <br />
        </div>
      </div>
    );
};

export default RoomDetail;
