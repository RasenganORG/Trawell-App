import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBookings, reset } from "./bookingSlice";
import Spinner from "../Spinner";

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
    <div>
      <h1>{bookings[0]?.price}</h1>
    </div>
  );
};

export default UserProfilePage;
