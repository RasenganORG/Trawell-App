import axios from "axios";

const API_URL_ADD = "http://localhost:8080/api/booking";
const API_URL_GET = "http://localhost:8080/api/bookings";

//POST booking in db
const addBooking = async (bookingData) => {
  const response = await axios.post(API_URL_ADD, bookingData);
  return response.data;
};

//GET all bookings
const getBookings = async () => {
  const response = await axios.get(API_URL_GET);
  return response.data;
};

//GET bookings by UserId
const getBookingsByUserId = async (userId) => {
  const response = await axios.get(`${API_URL_GET}/${userId}`);
  return response.data;
};

const bookingService = {
  addBooking,
  getBookings,
  getBookingsByUserId,
};

export default bookingService;
