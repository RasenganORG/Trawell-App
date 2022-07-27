import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../Components/Spinner";
import { Button, DatePicker, Form, Input } from "antd";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
		  <Form
			name="basic"
			labelCol={{span: 8}}
			wrapperCol={{span: 16}}
			autoComplete="off"
      style={{width:"50%", margin:"auto", marginTop:"200px"}}
		  >
			<Form.Item
			  label="Email"
			  name="email"
			  rules={[
				{
				  required: true,
				  message: "Please input your email!",
				},
			  ]}
			>
			  <Input 
        id='email'
        name='email'
        value={email}
        autoComplete='off'
        onChange={onChange}
        />
			</Form.Item>
	
			<Form.Item
			  label="Password"
			  name="password"
			  rules={[
				{
				  required: true,
				  message: "Please input your password!",
				},
			  ]}
			>
			  <Input.Password 
        id='password'
        name='password'
        value={password}
        autoComplete='off'
        onChange={onChange}
        />
			</Form.Item>
			<Form.Item
			  wrapperCol={{
				offset: 8,
				span: 16,
			  }}
			>

				<Button type="primary" onClick={onSubmit}>
				  Login
				</Button>

			</Form.Item>
		  </Form>
		</div>
	  );
};

export default Login;
