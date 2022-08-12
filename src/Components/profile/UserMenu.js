import { Link } from "react-router-dom";
import { Dropdown, Menu, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link to='register-user'>
              <h4>Register</h4>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to='login'>
              {" "}
              <h4>Login</h4>
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link to='/profile'>
              {" "}
              <h4>My profile</h4>
            </Link>
          ),
        },
        {
          key: "4",
          label: (
            <Button
              type='text'
              onClick={() => {
                console.log("signed out");
                dispatch(logout());
                navigate("/");
              }}
            >
              Sign Out
            </Button>
          ),
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} placement='bottom' arrow>
      <FontAwesomeIcon size='2x' className='user-icon' icon={faUserCircle} />
    </Dropdown>
  );
};

export default UserMenu;
