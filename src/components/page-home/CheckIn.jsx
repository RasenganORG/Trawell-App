import React from "react";
import { Calendar } from "antd";

const CheckIn = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CheckIn;
