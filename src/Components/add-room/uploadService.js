import axios from "axios";

const API_URL_POST = "http://localhost:8080/api/uploads";
const API_URL_GET = "http://localhost:8080/api/files";

// UPLOAD files
const uploadFiles = async (file) => {
  const response = await axios.post(API_URL_POST, file);
  return response.data;
};

// GET files
const getFiles = async () => {
  const response = await axios.get(API_URL_GET);
  return response.data;
};

const uploadService = {
  uploadFiles,
  getFiles,
};

export default uploadService;
