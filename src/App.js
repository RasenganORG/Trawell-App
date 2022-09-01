import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import RoomDetail from "./components/rooms/RoomDetail";
import AddRoomPage from "./components/add-room/AddRoomPage";
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
import { Navigate } from "react-router-dom";
import CalendarListings from "./components/profile/CalendarListings";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<Navigate to='rooms' />} />
            <Route path='rooms' element={<Rooms />} />
            <Route path='rooms/:roomId' element={<RoomDetail />} />
            <Route
              path='profile'
              element={
                <RequireAuth>
                  <UserProfilePage />
                </RequireAuth>
              }
            />
            <Route
              path='profile/my-calendar'
              element={
                <RequireAuth>
                  <CalendarListings />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path='add-room'
            element={
              <RequireAuth>
                <AddRoomPage />
              </RequireAuth>
            }
          />
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
