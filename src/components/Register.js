import React from "react";
import { Button, DatePicker, Form, Input } from "antd";
import { useState } from "react";

const Register = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
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
      <Form.Item label="Password">
        <Input />
      </Form.Item>
      <Button>Submit</Button>
    </Form>
  );
};

export default Register;
