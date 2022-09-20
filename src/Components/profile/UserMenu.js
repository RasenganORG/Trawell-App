import { Link } from "react-router-dom";
import { Dropdown, Menu, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import { useSelector } from "react-redux";

const UserMenu = () => {
  const isAuth = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuLogged = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link to='/profile'>
              <Button type='text'>My profile</Button>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Button
              type='text'
              onClick={() => {
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

  const menuNotLogged = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link to='register-user'>
              <Button type='text'>Register</Button>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to='login'>
              <Button type='text'>Login</Button>
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <div>
      {isAuth ? (
        <Dropdown overlay={menuLogged} placement='bottom' arrow>
          <FontAwesomeIcon
            size='2x'
            className='user-icon'
            icon={faUserCircle}
            color='#c7027c'
          />
        </Dropdown>
      ) : (
        <Dropdown overlay={menuNotLogged} placement='bottom' arrow>
          <FontAwesomeIcon
            size='2x'
            className='user-icon'
            icon={faUserCircle}
          />
        </Dropdown>
      )}
    </div>
  );
};

export default UserMenu;
