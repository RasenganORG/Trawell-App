import React from "react";
import { Button, DatePicker, Form, Input } from "antd";
import { useState } from "react";
import NavbarSimple from "../page-home/NavbarSimple";

const RegisterPage = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <NavbarSimple />
      <Form
        className="form-register"
        labelCol={{
          span: 4,
        }}
        wrRegistererCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        id="register-forms"
      >
        <Form.Item label="First Name" >
          <Input id="firstName"/>
        </Form.Item>
        <Form.Item label="Last Name">
          <Input id="lastName"/>
        </Form.Item>
        <Form.Item label="Email">
          <Input id="email"/>
        </Form.Item>
        <Form.Item label="Birthdate">
          <DatePicker id="calendar"/>
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
          <Input.Password id="password"/>
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password id="confirmPassword"/>
        </Form.Item>
        <Button type="primary" id="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
