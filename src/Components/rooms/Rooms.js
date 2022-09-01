import { getAllRooms, getFilteredRooms, reset } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../Spinner";
import { Layout, Row } from "antd";
import CardComp from "./CardComp";
import { useSearchParams } from "react-router-dom";

export default function Rooms() {
  const { rooms, isLoading, search } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) {
      dispatch(getAllRooms());
      dispatch(reset());
    }
  }, [dispatch, search]);

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
          : "No room added yet"}
      </Row>
    </Layout>
  );
}
