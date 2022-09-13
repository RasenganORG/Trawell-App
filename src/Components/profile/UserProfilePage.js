import { Tabs, Button, Avatar, List, Collapse, Modal, Empty } from "antd";
import { FormOutlined } from "@ant-design/icons";
import Spinner from "../Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBookingsByUser, reset } from "./bookingSlice";
import {
  getListingByUserLogged,
  updateListingByUserLogged,
} from "../profile/listingSlice";
import CalendarListings from "./CalendarListings";
import EditListing from "./EditListing";
import { toast } from "react-toastify";
import moment from "moment";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const UserProfilePage = () => {
  const { Panel } = Collapse;
  const { bookings, isLoading, isError, isSuccess } = useSelector(
    (state) => state.bookings
  );
  const { user } = useSelector((state) => state.auth);
  const { listings } = useSelector((state) => state.myListings);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState("");

  const {
    id,
    roomType,
    nrOfGuests,
    nrOfBedrooms,
    nrOfBeds,
    nrOfBathrooms,
    bathroomPrivate,
    location,
    amenities,
  } = formData;

  const showModal = (listings) => {
    setFormData(listings);
    console.log("clicked listing is:", formData);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = (e) => {
    e.preventDefault();
    const listingData = {
      id,
      roomType,
      nrOfGuests,
      nrOfBedrooms,
      nrOfBeds,
      nrOfBathrooms,
      bathroomPrivate,
      location,
      amenities,
    };
    dispatch(updateListingByUserLogged(listingData));
    toast.info("Your listing was edited successfuly");
    setVisible(false);
    dispatch(getListingByUserLogged(user.id));
  };

  useEffect(() => {
    dispatch(getBookingsByUser(user.id));
    dispatch(getListingByUserLogged(user.id));
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
        {bookings && (
          <TabPane tab='My Bookings' key='1'>
            <List
              itemLayout='horizontal'
              dataSource={bookings}
              renderItem={(item, id) => (
                <List.Item id={id}>
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
                          {`${moment(item.startDate).format(
                            "MMMM Do YYYY"
                          )} to  ${moment(item.endDate).format(
                            "MMMM Do YYYY"
                          )}`}
                        </p>
                        <h5 style={{ margin: 0 }}> Spent: {item.price}$</h5>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>
        )}
        {listings && (
          <TabPane tab='My Listings' key='2'>
            <Collapse defaultActiveKey={["0"]} onChange={onChange} ghost={true}>
              <Panel header='View availability' key='1'>
                <CalendarListings />
              </Panel>
            </Collapse>

            <List
              itemLayout='horizontal'
              dataSource={listings}
              renderItem={(listing, id) => (
                <List.Item
                  id={id}
                  actions={[
                    <FormOutlined
                      width='1em'
                      onClick={() => showModal(listing)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={"large"}
                        src={`/${listing.location.photos}`}
                      />
                    }
                    title={
                      <a href={`/rooms/${listing.id}`}>
                        {listing.location.country}, {listing.location.city}
                      </a>
                    }
                    description={
                      <div>
                        <p style={{ margin: 0 }}>
                          {" "}
                          Available
                          {`${listing.location.availableFrom} to  ${listing.location.availableTo}`}{" "}
                        </p>

                        <h5 style={{ margin: 0 }}>
                          {" "}
                          Price: {listing.location.price}$
                        </h5>
                        <div
                          style={{
                            display: "flex",
                            marginLeft: "37%",
                          }}
                        >
                          <Modal
                            width={800}
                            centered
                            visible={visible}
                            title='Edit listing'
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                              <Button key='back' onClick={handleCancel}>
                                Return
                              </Button>,
                              <Button
                                key='submit'
                                type='primary'
                                loading={loading}
                                onClick={handleOk}
                              >
                                Submit
                              </Button>,
                            ]}
                          >
                            <EditListing
                              formData={formData}
                              setFormData={setFormData}
                            />
                          </Modal>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
};
export default UserProfilePage;
