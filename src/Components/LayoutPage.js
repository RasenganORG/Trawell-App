import { Outlet, useNavigate, Link } from "react-router-dom";
import { Button } from "antd";
import Logo from "../images/logo.png";
import SearchComp from "./rooms/SearchComp";
import UserMenu from "../components/profile/UserMenu";
import { useDispatch } from "react-redux";
import { deActivateSearch } from "./rooms/roomSlice";

const LayoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toHome = () => {
    dispatch(deActivateSearch());
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
          <img
            onClick={toHome}
            src={Logo}
            alt='mypagelogo'
            style={{ width: "120px" }}
          />
        </Link>
        <SearchComp />
        <div style={{ display: "flex", marginLeft: 30 }}>
          <Button
            style={{ marginRight: 20 }}
            onClick={() => navigate("add-room")}
          >
            Become a host
          </Button>
          <UserMenu />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutPage;
