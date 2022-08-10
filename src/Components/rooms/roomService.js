import axios from "axios";

const API_URL_POST = "http://localhost:8080/api/propertyToRent/";
const API_URL_GET = "http://localhost:8080/api/propertiesToRent";
const API_URL_COUNTRY = "http://localhost:8080/api/country";

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

//GET room by country
const getRoomByCountry = async (country) => {
  const response = await axios.get(`${API_URL_COUNTRY}/${country}`);
  console.log(response.data);
  return response.data;
};

const roomService = {
  getRoom,
  getRooms,
  addRoom,
  getRoomByCountry,
};

export default roomService;
