import { Alert, Calendar } from "antd";
import moment from "moment";
import React, { useState } from "react";

const CalendarComp = () => {
  const [value, setValue] = useState(moment("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(moment("2022-07-05"));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "700px",
        margin: "auto",
      }}
    >
      <>
        <Alert
          message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        />
      </>
    </div>
  );
};

export default CalendarComp;
