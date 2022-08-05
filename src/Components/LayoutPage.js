import { Outlet, useNavigate, Link } from "react-router-dom";
import { Button, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import Logo from "../images/logo.png";
import UserAcc from "../components/profile/UserMenu";
import { getRoomByCountry } from "./rooms/roomSlice";

const LayoutPage = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = (value) => {
    // navigate("/search");
    dispatch(getRoomByCountry(value));
  };

  return (
    <div>
      <div
        style={{
          margin: 0,
          backgroundColor: "white",
          boxShadow: "5px 8px 5px 3px rgba(200, 200, 200, 0.3)",
          height: "80px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to='/'>
          <img src={Logo} alt='mypagelogo' style={{ width: "120px" }} />
        </Link>
        <Space direction='horizontal'>
          <Search
            placeholder='Find a place'
            allowClear
            enterButton='Search'
            size='large'
            onSearch={onSearch}
          />
        </Space>
        {/* <Button
          onClick={() => navigate("search")}
          style={{
            backgroundColor: "#c7027c",
            border: "none",
          }}
          type='primary'
        >
          Find
        </Button> */}
        <Button onClick={() => navigate("add-room")}>Become a host</Button>
        <UserAcc />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutPage;
