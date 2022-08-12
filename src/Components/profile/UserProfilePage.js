import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBookings, reset } from "./bookingSlice";
import Spinner from "../Spinner";
import CardBookings from "./CardBookings";
import { toast } from "react-toastify";

const UserProfilePage = () => {
  const { bookings, isLoading } = useSelector((state) => state.bookingState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookings());
    dispatch(reset());
  }, [dispatch]);

  console.log("bookings are", bookings);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h4 style={{ margin: 0, float: "left", marginLeft: 30, marginTop: 30 }}>
        My Bookings
      </h4>
      <div
        style={{
          margin: 30,
          marginTop: 60,
          padding: 20,
          border: "2px solid #f3f3f3",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {bookings
          ? bookings.map((bookings, id) => {
              return <CardBookings bookings={bookings} index={id} />;
            })
          : "No booking yet!"}
      </div>
    </>
  );
};

export default UserProfilePage;
