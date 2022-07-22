import React from "react";
import { Button, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";
import UserAcc from "./UserAcc";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
	return (
		<Header
			className='header'
			style={{
				margin: 0,
				backgroundColor: "white",
				boxShadow: "5px 8px 5px 3px rgba(200, 200, 200, 0.3)",
				height: "90px",
			}}
		>
			<Link to='/'>
				<img className='logo' src={Logo} alt="mylogo" />
			</Link>
			
			<div className='user'>
				<Button
					onClick={() => navigate('/register-host')}
					className='button-host'
				>
					Become a host
				</Button>
				<UserAcc />
			</div>
		</Header>
	);
};

export default Navbar;
