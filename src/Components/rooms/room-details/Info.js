import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocation } from "@fortawesome/free-solid-svg-icons";
import CardAmenities from "./CardAmenities";
import CardSummary from "./CardSummary";

const Info = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: "20%",
          width: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: "55%",
          }}
        >
          <h3 style={{ margin: "auto" }}>ANNA PENSION STUDIO ROOM</h3>
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
              {" "}
              <FontAwesomeIcon icon={faLocation} />
              Karterados Santorini, Greece
            </h4>
          </div>
          <p>
            The Anna Pension is located in the village of Karterados and offers
            peaceful and family hospitality as if you were in your own home,
            just 1,5km from Fira which is the capital of Santorini. Wi-fi is
            provided in all spaces. All air conditioned units are equipped with
            TV, refrigerator and orthopedic mattresses. Most have a private
            balcony overlooking the sea or the garden.
          </p>
          <CardAmenities />
        </div>
        <div
          style={{
            float: "right",
          }}
        >
          <CardSummary />
        </div>
      </div>
      <div
        style={{
          width: "60%",
          marginLeft: "20%",
          paddingTop: 25,
          paddingBottom: 100,
        }}
      ></div>
    </div>
  );
};

export default Info;
