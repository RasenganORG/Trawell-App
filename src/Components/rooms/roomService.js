import axios from "axios";

const API_URL_POST = "http://localhost:8080/api/propertyToRent/";
const API_URL_GET = "http://localhost:8080/api/propertiesToRent";
const API_URL_AVAILABLE = "http://localhost:8080/api/available";

//POST room in database
const addRoom = async (roomData) => {
  const response = await axios.post(API_URL_POST, roomData);
  return response.data;
};

//GET all rooms
const getRooms = async () => {
  const response = await axios.get(API_URL_GET);
  return response.data;
};

//GET room by ID
const getRoom = async (roomId) => {
  const response = await axios.get(`${API_URL_GET}/${roomId}`);
  return response.data;
};

//FILTER rooms by country, checkin, checkout
const getAvailableRooms = async (checkIn, checkOut, country) => {
  console.log("params in service", checkIn, checkOut, country);
  const response = await axios.get(
    `${API_URL_AVAILABLE}/?availableFrom=${checkIn}&availableTo=${checkOut}&country=${country}`
  );
  console.log("rooms filtered in service", response.data);
  return response.data;
};

const roomService = {
  getRooms,
  getRoom,
  addRoom,
  getAvailableRooms,
};

export default roomService;
