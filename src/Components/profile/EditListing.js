import { Collapse } from "antd";
import React from "react";
import UpdateEntirePlace from "./update-room/UpdateEntirePlace";
import UpdateNumOfGuests from "./update-room/UpdateNumOfGuests";
import UpdateBedrooms from "./update-room/UpdateBedrooms";
import UpdateBeds from "./update-room/UpdateBeds";
import UpdateBathrooms from "./update-room/UpdateBathrooms";
import UpdateBathroomPrivate from "./update-room/UpdateBarthroomPrivate";
import UpdateLocation from "./update-room/UpdateLocation";
import UpdateAmenities from "./update-room/UpdateAmenities";

const EditListing = (props) => {
  const { formData, setFormData } = props;
  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
  };

  const onChangeSelect = (value, inputName) => {
    setFormData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const onChangeInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      location: {
        ...formData.location,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const onRadioSelect = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      bathroomPrivate: e.target.value,
    }));
  };

  const onChangeCheckbox = (checkedValues) => {
    setFormData((prevState) => ({
      ...prevState,
      amenities: checkedValues,
    }));
  };

  const onChangeCalendar = (startDate, endDate) => {
    setFormData((prevState) => ({
      ...prevState,
      location: {
        ...formData.location,
        availableFrom: startDate,
        availableTo: endDate,
      },
    }));
  };

  return (
    <Collapse defaultActiveKey={["0"]} onChange={onChange}>
      <Panel header='Your listing details' key='1'>
        <UpdateEntirePlace
          onChangeSelect={onChangeSelect}
          defaultValue={formData.roomType}
        />
        <UpdateNumOfGuests
          onChangeSelect={onChangeSelect}
          defaultValue={formData.nrOfGuests}
        />
        <UpdateBedrooms
          onChangeSelect={onChangeSelect}
          defaultValue={formData.nrOfBedrooms}
        />
        <UpdateBeds
          onChangeSelect={onChangeSelect}
          defaultValue={formData.nrOfBeds}
        />
        <UpdateBathrooms
          onChangeSelect={onChangeSelect}
          defaultValue={formData.nrOfBathrooms}
        />
        <UpdateBathroomPrivate onRadioSelect={onRadioSelect} />
      </Panel>
      <Panel header='Location' key='2'>
        <UpdateLocation
          defaultValue={formData.location}
          onChangeInput={onChangeInput}
          onChangeCalendar={onChangeCalendar}
        />
      </Panel>
      <Panel header='Amenities' key='3'>
        <UpdateAmenities
          onChangeCheckbox={onChangeCheckbox}
          defaultValue={formData.amenities}
        />
      </Panel>
    </Collapse>
  );
};

export default EditListing;
