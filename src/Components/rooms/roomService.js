import axios from "axios";

const API_URL_POST = "http://localhost:8080/api/propertyToRent/";
const API_URL_GET = "http://localhost:8080/api/propertiesToRent";

//POST room in database
const addRoom = async (roomData) => {
  const response = await axios.post(API_URL_POST, roomData);
  return response.data;
};

//GET room data
const getRoom = async () => {
  const response = await axios.get(API_URL_GET);
  return response.data;
};

//GET room by country
const getRoomByCountry = async (country) => {
  const response = await axios.get(`${API_URL_GET}/${country}`);
  console.log(response.data);
  return response.data;
};

getRoomByCountry("România");

const roomService = {
  getRoom,
  addRoom,
  getRoomByCountry,
};

export default roomService;
