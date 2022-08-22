import { Tabs, Button } from "antd";
import { Avatar, List } from "antd";
import Spinner from "../Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBookings, reset } from "./bookingSlice";
import { getRoomByUserId } from "../profile/listingSlice";
import { useNavigate } from "react-router-dom";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const UserProfilePage = () => {
  const { bookings, isLoading } = useSelector((state) => state.bookings);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { listings } = useSelector((state) => state.myListings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookings());
    dispatch(getRoomByUserId(user.id));
    dispatch(reset());
  }, [dispatch, user.id]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Tabs style={{ width: 800 }} defaultActiveKey='1' onChange={onChange}>
        <TabPane tab='My Bookings' key='1'>
          <List
            itemLayout='horizontal'
            dataSource={bookings}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={"large"} src={`/${item.photo}`} />}
                  title={
                    <a href={`/rooms/${item.roomId}`}>
                      {item.country}, {item.city}
                    </a>
                  }
                  description={
                    <div>
                      <p style={{ margin: 0 }}>
                        {`${item.startDate} to  ${item.endDate}`}{" "}
                      </p>
                      <h5 style={{ margin: 0 }}> Spent: {item.price}$</h5>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab='My Listings' key='2'>
          <Button
            onClick={() => navigate("/profile/my-calendar")}
            type='primary'
            size='small'
            style={{ width: 120, marginLeft: 50 }}
          >
            View Calendar
          </Button>
          <List
            itemLayout='horizontal'
            dataSource={listings}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar size={"large"} src={`/${item.location.photos}`} />
                  }
                  title={
                    <a href={`/rooms/${item.id}`}>
                      {item.location.country}, {item.location.city}
                    </a>
                  }
                  description={
                    <div>
                      <p style={{ margin: 0 }}>
                        {" "}
                        Available
                        {`${item.location.availableFrom} to  ${item.location.availableTo}`}{" "}
                      </p>
                      <h5 style={{ margin: 0 }}>
                        {" "}
                        Price: {item.location.price}$
                      </h5>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "37%",
                        }}
                      >
                        <Button
                          type='secondary'
                          size='small'
                          style={{ width: 100, marginLeft: 43 }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default UserProfilePage;
