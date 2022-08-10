import { getAllRooms, reset } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../Spinner";
import { Layout, Row } from "antd";
import CardComp from "./CardComp";

export default function Rooms() {
  const { rooms, isLoading } = useSelector((state) => state.roomState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRooms());
    dispatch(reset());
  }, [dispatch]);

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
