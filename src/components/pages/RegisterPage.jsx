import React from "react";
import { Button, DatePicker, Form, Input } from "antd";
import { useState } from "react";
import Navbar from "../page-home/Navbar";

const RegisterPage = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <Navbar />
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
      >
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Birthdate">
          <DatePicker />
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
          <Input.Password />
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
          <Input.Password />
        </Form.Item>
        <Form.Item label="Birthdate">
          <DatePicker />
        </Form.Item>
        <Button type="primary">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
