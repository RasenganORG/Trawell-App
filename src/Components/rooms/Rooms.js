import { getAllRooms, reset } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../Spinner";
import { Layout, Row, Empty } from "antd";
import CardComp from "./CardComp";

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
      <Row gutter={[0, 8]} style={{ margin: 0 }}>
        {rooms ? (
          rooms.map((room, id) => {
            return <CardComp room={room} index={id} />;
          })
        ) : (
          <Empty
            style={{ margin: "auto", marginTop: "20%" }}
            description='Nothing to see here!'
          />
        )}
      </Row>
    </Layout>
  );
}
