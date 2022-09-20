import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, authActions } from "../auth/authSlice";
import Spinner from "../Spinner";
import { Button, Form, Input } from "antd";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const test = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = test;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/");
    }

    dispatch(authActions.reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

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
      <div
        style={{
          margin: 0,
          backgroundColor: "white",
          boxShadow: "5px 8px 5px 3px rgba(200, 200, 200, 0.3)",
          height: "80px",
          display: "flex",

          alignItems: "center",
        }}
      >
        <Link to='/'>
          <img
            src={Logo}
            alt='mypagelogo'
            style={{ width: "120px", marginLeft: 20 }}
          />
        </Link>
      </div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete='off'
        style={{ width: "40%", marginLeft: "20%", marginTop: "10%" }}
      >
        <Form.Item
          label='Email'
          name='email'
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
          label='Password'
          name='password'
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
          <p style={{ marginBottom: 10 }}>
            If you don't have an account, please{" "}
            {<Link to='/register-user'>Register</Link>} here
          </p>
          <Button type='primary' onClick={onSubmit}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
