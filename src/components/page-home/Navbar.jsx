import React from "react";
import { Button, Dropdown, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";

import CheckIn from "./CheckIn";
import Search from "./Search";
import WhoTravels from "./WhoTravels";
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
			<Link to='/home'>
				<img className='logo' src={Logo} alt='mylogo2'/>
			</Link>
			<div>
				<Dropdown overlay={CheckIn} placement='bottom' arrow>
					<Button className='checkin'>Checkin</Button>
				</Dropdown>
				<Dropdown overlay={CheckIn} placement='bottom' arrow>
					<Button data-cy = "blabla">Checkout</Button>
				</Dropdown>
				<Search />
				<WhoTravels />
				<Link to='/search-result'>
					<Button
            onClick={() => navigate('/')}
						style={{
							backgroundColor: "#c7027c",
							border: "none",
						}}
						type='primary'
					>
						Find
					</Button>
				</Link>
			</div>
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
