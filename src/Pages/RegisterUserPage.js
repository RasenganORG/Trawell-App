import React from 'react';
import { Button, DatePicker, Form, Input } from "antd";
import { useState } from "react";

const RegisterUserPage = () => {
    const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <Form
        style={{
            width:"900px",
            margin:"auto",
            marginTop:"100px"
        }}
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
        <Form.Item label="Phone Number">
          <Input id="phoneNumber"/>
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

export default RegisterUserPage;