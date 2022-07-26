import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080/api/user/";

//Register user
const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data;
};

// Login user
const login = async (userData) => {
	const response = await axios.get(API_URL + userData.email, userData);

	if (response.data && response.data.password === userData.password) {
		localStorage.setItem("user", JSON.stringify(response.data));
	} else {
		toast.error("Passwords do not match");
	}

	return response.data;
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	logout,
	login,
};
export default authService;
