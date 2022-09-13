import { Button, DatePicker, Form, Input, Select } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, authActions } from "../auth/authSlice";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

const { Option } = Select;

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthdate: "",
    password: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    email,
    birthdate,
    phoneNumber,
    password,
    password2,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

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

  const onChangeDate = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      birthdate: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        birthdate,
        phoneNumber,
        password,
      };

      dispatch(register(userData));
      toast.info("Registered Successfully");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value='40'>+40</Option>
        <Option value='45'>+45</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      style={{ width: 1000, marginLeft: 350, marginTop: 200 }}
      labelCol={{ span: 8 }}
      layout='horizontal'
      id='register-forms'
    >
      <Form.Item label='First Name'>
        <Input
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={onChange}
          autoComplete='off'
        />
      </Form.Item>
      <Form.Item label='Last Name'>
        <Input
          id='lastName'
          name='lastName'
          value={lastName}
          onChange={onChange}
          autoComplete='off'
        />
      </Form.Item>
      <Form.Item label='Email'>
        <Input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={onChange}
          autoComplete='off'
        />
      </Form.Item>
      <Form.Item
        name='phone'
        label='Phone Number'
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
          className='form-control'
          type='number'
          id='phoneNumber'
          name='phoneNumber'
          value={phoneNumber}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label='Birthdate'>
        <DatePicker
          id='birthdate'
          name='birthdate'
          value={birthdate}
          onChange={onChangeDate}
          autoComplete='off'
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
          onChange={onChange}
          autoComplete='off'
        />
      </Form.Item>

      <Form.Item
        label='Confirm password'
        name='confirmPassword'
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          id='password2'
          name='password2'
          value={password2}
          onChange={onChange}
          autoComplete='off'
        />
      </Form.Item>
      <Button onClick={onSubmit} type='primary' id='submit'>
        Register
      </Button>
    </Form>
  );
}

export default RegisterPage;
