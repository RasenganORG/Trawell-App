import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage";
import Content from "./Components/Content";
import RoomDetail from "./Pages/RoomDetail";
import FilteredContent from "./Pages/FilteredContent";
import RegisterHostPage from "./Pages/RegisterHostPage";
import NotFound from "./Pages/NotFound";
import UserProfilePage from "./Pages/UserProfilePage";
import { RequireAuth } from "./Components/auth/RequireAuth";
import { AuthProvider } from "./Components/auth/AuthProvider";
import "antd/dist/antd.css";
import "./App.css";
import Register from "./Pages/Register";
import LoginTest from "./Components/LoginTest";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
		<div className='App'>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path='/' element={<LayoutPage />}>
							<Route index element={<Content />} />
							<Route path='rooms' element={<Content />} />
							<Route path='rooms/:roomId' element={<RoomDetail />} />
							<Route path='search' element={<FilteredContent />} />
							<Route path='register-host' element={<RegisterHostPage />} />
							<Route path='register-new-user' element={<Register />} />
							<Route
								path='user-profile'
								element={
									<RequireAuth>
										<UserProfilePage />
									</RequireAuth>
								}
							/>
							<Route path='login' element={<LoginTest />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
			<ToastContainer />						

		</div>
		</>
	);
}

export default App;
