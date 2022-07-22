import { Button, message, Steps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HouseType from "../page-register-host/HouseType";
import PropertyType from "../page-register-host/PropertyType";
import EntirePlace from "../page-register-host/EntirePlace";
import NumberOfGuests from "../page-register-host/NumberOfGuests";
import Bedrooms from "../page-register-host/Bedrooms";
import Beds from "../page-register-host/Beds";
import Bathrooms from "../page-register-host/Bathrooms";
import BathroomPrivate from "../page-register-host/BathroomPrivate";
import Location from "../page-register-host/Location";
import UploadPhotos from "../page-register-host/UploadPhotos";
import NavbarSimple from "../page-home/NavbarSimple";
import Amenities from "../page-register-host/Amenities";
import GridUploads from "../page-register-host/GridUploads";

const { Step } = Steps;
const steps = [
  {
    title: "Property",
    content: [<HouseType />, <PropertyType />],
  },
  {
    title: "Property details",
    content: [
      <EntirePlace />,
      <NumberOfGuests />,
      <Bedrooms />,
      <Beds />,
      <Bathrooms />,
      <BathroomPrivate />,
    ],
  },
  {
    title: "Location",
    content: [<Location />],
  },
  {
    title: "Amenities",
    content: [<Amenities />],
  },
  {
    title: "Photos",
    content: [<UploadPhotos />, <GridUploads />],
  },
];

const HostRegisterPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <NavbarSimple />
      <div
        style={{
          width: "60%",
          marginLeft: "20%",
          marginTop: "5%",
          marginBottom: "5%",
          backgroundColor: "transparent",
        }}
      >
        <Steps style={{ marginBottom: "30px" }} current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button
              type="secondary"
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
            <Link to="/">
              <Button
                style={{
                  backgroundColor: "#c7027c",
                  border: "none",
                  borderRadius: "6px",
                }}
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Finish
              </Button>
            </Link>
          )}
          {current < steps.length - 1 && (
            <Button
              style={{
                backgroundColor: "#c7027c",
                border: "none",
                borderRadius: "6px",
                width: "100px",
              }}
              type="primary"
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

export default HostRegisterPage;
