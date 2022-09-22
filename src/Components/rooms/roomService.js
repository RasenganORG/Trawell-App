import axios from "axios";

const API_URL_POST = "http://localhost:8080/api/propertyToRent/";
const API_URL_GET = "http://localhost:8080/api/allRooms/";
const API_URL_AVAILABLE = "http://localhost:8080/api/available";

//POST room in database
const addRoom = async (roomData) => {
  const response = await axios.post(API_URL_POST, roomData);
  return response.data;
};

//GET all rooms
const getRooms = async (userId) => {
  const response = await axios.get(`${API_URL_GET}${userId}`);
  return response.data;
};

//GET room by ID
const getRoom = async (roomId) => {
  const response = await axios.get(
    `http://localhost:8080/api/propertiesToRent/${roomId}`
  );
  return response.data;
};

//FILTER rooms by country, checkin, checkout
const getAvailableRooms = async (checkIn, checkOut, country, userId) => {
  console.log({ userId });
  const response = await axios.get(
    `${API_URL_AVAILABLE}/?availableFrom=${checkIn}&availableTo=${checkOut}&country=${country}&userId=${userId}`
  );
  return response.data;
};

// ADD LIKE
const addLike = async (likeData) => {
  const response = await axios.post(
    "http://localhost:8080/api/addLike",
    likeData,
    {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

// DELETE LIKE
const deleteLike = async (data) => {
  const response = await axios.delete("http://localhost:8080/api/deleteLike", {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
    data: { data },
  });
  return response.data;
};

const roomService = {
  getRooms,
  getRoom,
  addRoom,
  getAvailableRooms,
  addLike,
  deleteLike,
};

export default roomService;
