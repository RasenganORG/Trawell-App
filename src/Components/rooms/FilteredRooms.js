import React from "react";
import { getRoomByCountry } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../Spinner";
import { Layout, Row } from "antd";
import CardComp from "./CardComp";
import { useParams } from "react-router-dom";

export default function FilteredRooms() {
  const { rooms, isLoading } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const { country } = useParams();

  useEffect(() => {
    dispatch(getRoomByCountry(country));
  }, [dispatch, country]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Row gutter={[6, 6]}>
        {rooms
          ? rooms.map((room, id) => {
              return <CardComp room={room} index={id} />;
            })
          : "Sorry, no room here!"}
      </Row>
    </Layout>
  );
}
