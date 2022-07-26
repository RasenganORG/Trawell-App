import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const menu = (
	<Menu
		items={[
			{
				key: "1",
				label: <Link to='register-new-user'>Register</Link>,
			},
			{
				key: "2",
				label: <Link to='login'>Login</Link>,
			},
			{
				key: "3",
				label: <Link to='/register-host'>Register as host</Link>,
			},
		]}
	/>
);

const UserAcc = () => (
	<Dropdown overlay={menu} placement='bottom' arrow>
		<FontAwesomeIcon size='2x' className='user-icon' icon={faUserCircle} />
	</Dropdown>
);

export default UserAcc;
