import axios from "axios";
const API_URL_USERID = "http://localhost:8080/api/properties";
const API_URL_UPDATE = "http://localhost:8080/api/propertiesToRent";

//GET room by UserId
const getListingByUserId = async (userId) => {
  const response = await axios.get(`${API_URL_USERID}/${userId}`);
  return response.data;
};

// Update listing by roomId
const editListing = async (listing) => {
  const response = await axios.put(`${API_URL_UPDATE}/${listing.id}`, listing);
  return response.data;
};

const listingService = {
  getListingByUserId,
  editListing,
};

export default listingService;
