import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./Pages/LayoutPage";
import Content from "./Components/Content";
import RoomDetail from "./Pages/RoomDetail";
import FilteredContent from "./Pages/FilteredContent";
import RegisterHostPage from "./Pages/RegisterHostPage";
import LoginPage from "./Pages/LoginPage";
import RegisterUserPage from "./Pages/RegisterUserPage";
import NotFound from "./Pages/NotFound";
import UserProfilePage from "./Pages/UserProfilePage";
import { RequireAuth } from "./Components/auth/RequiredAuth";
import { AuthProvider } from "./Components/auth/AuthProvider";

import "./App.css";

function App() {
	return (
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
							<Route path='register-new-user' element={<RegisterUserPage />} />
							<Route
								path='user-profile'
								element={
									<RequireAuth>
										<UserProfilePage />
									</RequireAuth>
								}
							/>
							<Route path='login' element={<LoginPage />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
