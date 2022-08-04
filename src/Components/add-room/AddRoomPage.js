import { Button, message, Steps } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import HouseType from "./HouseType";
import PropertyType from "./PropertyType";
import EntirePlace from "./EntirePlace";
import NumberOfGuests from "./NumberOfGuests";
import Bedrooms from "./Bedrooms";
import Beds from "./Beds";
import Bathrooms from "./Bathrooms";
import BathroomPrivate from "./BathroomPrivate";
import Location from "./Location";
import Amenities from "./Amenities";
import { addRoom } from "../rooms/roomSlice";
import { toast } from "react-toastify";
import UploadPhotos from "./UploadPhotos";

const AddRoomPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [formData, setFormData] = useState({
    placeType: "",
    propertyType: "",
    roomType: "",
    nrOfGuests: "",
    nrOfBedrooms: "",
    nrOfBeds: "",
    nrOfBathrooms: "",
    bathroomPrivate: "",
    location: {
      country: "",
      city: "",
      street: "",
      price: "",
      availableFrom: "",
      availableTo: "",
      description: "",
    },
    amenities: [],
  });

  const {
    placeType,
    propertyType,
    roomType,
    nrOfGuests,
    nrOfBedrooms,
    nrOfBeds,
    nrOfBathrooms,
    bathroomPrivate,
    location,
    amenities,
  } = formData;

  const onChangeCheckbox = (checkedValues) => {
    setFormData((prevState) => ({
      ...prevState,
      amenities: checkedValues,
    }));
  };

  const onChangeSelect = (value, inputName) => {
    setFormData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const onRadioSelect = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      bathroomPrivate: e.target.value,
    }));
  };

  const onChangeInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      location: {
        ...location,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const onChangeCalendar = (startDate, endDate) => {
    setFormData((prevState) => ({
      ...prevState,
      location: {
        ...location,
        availableFrom: startDate,
        availableTo: endDate,
      },
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const roomData = {
      placeType,
      propertyType,
      roomType,
      nrOfGuests,
      nrOfBedrooms,
      nrOfBeds,
      nrOfBathrooms,
      bathroomPrivate,
      location,
      amenities,
    };
    dispatch(addRoom(roomData));
    navigate("/");
  };

  const { Step } = Steps;

  const steps = [
    {
      id: 1,
      title: "Property",
      content: (
        <>
          <HouseType onChangeSelect={onChangeSelect} />
          <PropertyType onChangeSelect={onChangeSelect} />
        </>
      ),
    },
    {
      id: 2,
      title: "Property details",
      content: (
        <div style={{ marginTop: 50 }}>
          <EntirePlace onChangeSelect={onChangeSelect} />
          <NumberOfGuests onChangeSelect={onChangeSelect} />
          <Bedrooms onChangeSelect={onChangeSelect} />
          <Beds onChangeSelect={onChangeSelect} />
          <Bathrooms onChangeSelect={onChangeSelect} />
          <BathroomPrivate onRadioSelect={onRadioSelect} />
        </div>
      ),
    },
    {
      id: 3,
      title: "Location",
      content: (
        <div style={{ marginTop: 50, width: "60%" }}>
          <Location
            onChangeInput={onChangeInput}
            onChangeCalendar={onChangeCalendar}
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Amenities",
      content: <Amenities onChangeCheckbox={onChangeCheckbox} />,
    },
    {
      id: 5,
      title: "Photos",
      content: <UploadPhotos />,
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "60%",
          marginLeft: "20%",
          marginTop: "5%",
          marginBottom: "5%",
          backgroundColor: "transparent",
        }}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div
          style={{
            minHeight: "200px",
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {steps[current].content}
        </div>
        <div
          style={{
            marginTop: 24,
            marginBottom: 20,
          }}
        >
          {current > 0 && (
            <Button
              type='secondary'
              style={{
                color: "grey",
                margin: "0 8px",
                marginBottom: "20px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              style={{
                backgroundColor: "#c7027c",
                border: "none",
                borderRadius: "6px",
              }}
              type='primary'
              onClick={onSubmit}
            >
              Finish
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              style={{
                backgroundColor: "#c7027c",
                border: "none",
                borderRadius: "6px",
                width: "100px",
              }}
              type='primary'
              onClick={() => next()}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddRoomPage;
