import React, { useState } from "react";
import { Button, Input, Space, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { activateSearch, getFilteredRooms } from "./roomSlice";
import { useDispatch } from "react-redux";

const { RangePicker } = DatePicker;

const SearchComp = () => {
  const dispatch = useDispatch();

  const [formSearch, setFormSearch] = useState({
    availableFrom: "",
    availableTo: "",
    country: "",
  });

  const { availableFrom, availableTo, country } = formSearch;

  const onChangeCalendar = (checkIn, checkOut) => {
    setFormSearch((prevState) => ({
      ...prevState,
      availableFrom: checkIn[0].format("YYYY-MM-DD"),
      availableTo: checkIn[1].format("YYYY-MM-DD"),
    }));
    console.log("calendar changed");
  };

  const onChangeInput = (e) => {
    setFormSearch((prevState) => ({
      ...prevState,
      country: e.target.value,
    }));
    console.log("input changed");
  };

  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();

    navigate(
      `rooms?availableFrom=${availableFrom}&availableTo=${availableTo}&country=${country}`
    );
    dispatch(activateSearch());
    dispatch(
      getFilteredRooms({
        checkIn: availableFrom,
        checkOut: availableTo,
        country: country,
      })
    );
  };

  return (
    <div>
      <Space direction='horizontal' size={0} style={{ marginLeft: 70 }}>
        <Input
          placeholder='Where Trawell'
          onChange={onChangeInput}
          style={{ borderRadius: 0 }}
        />
        <RangePicker
          style={{ borderRadius: 0 }}
          placeholder={["Checkin", "Checkout"]}
          onChange={onChangeCalendar}
        />
        <Button
          type='primary'
          style={{ backgroundColor: "#c7027c", border: "0", borderRadius: 0 }}
          onClick={onSearch}
        >
          Find
        </Button>
      </Space>
    </div>
  );
};

export default SearchComp;
