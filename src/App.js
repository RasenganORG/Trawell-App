import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import RoomDetail from "./components/rooms/RoomDetail";
import FilteredRooms from "./components/rooms/FilteredRooms";
import RegisterHostPage from "./components/auth/RegisterHostPage";
import NotFound from "./components/NotFound";
import UserProfilePage from "./components/profile/UserProfilePage";
import { RequireAuth } from "./components/auth/RequireAuth";
import "antd/dist/antd.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./components/auth/RegisterPage";
import Login from "./components/auth/Login";
import Rooms from "./components/rooms/Rooms";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<Rooms />} />
            <Route path='rooms' element={<Rooms />} />
            <Route path='rooms/:roomId' element={<RoomDetail />} />
            <Route path='search' element={<FilteredRooms />} />
            <Route
              path='profile'
              element={
                <RequireAuth>
                  <UserProfilePage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path='register-host' element={<RegisterHostPage />} />
          <Route path='register-user' element={<RegisterPage />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
