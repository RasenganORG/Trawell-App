import axios from "axios";
const API_URL_USERID = "http://localhost:8080/api/properties";

//GET room by UserId
const getRoomByUser = async (userId) => {
  const response = await axios.get(`${API_URL_USERID}/${userId}`);
  return response.data;
};

const listingService = {
  getRoomByUser,
};

export default listingService;
