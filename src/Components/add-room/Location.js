import { Form, Input, DatePicker } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Location = (props) => {
  return (
    <Form
      style={{ width: "100%" }}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout='horizontal'
    >
      <Form.Item label='Country'>
        <Input
          name='country'
          onChange={(value) => props.onChangeInput(value)}
        />
      </Form.Item>
      <Form.Item label='City'>
        <Input name='city' onChange={(value) => props.onChangeInput(value)} />
      </Form.Item>
      <Form.Item label='Street adress'>
        <Input name='street' onChange={(value) => props.onChangeInput(value)} />
      </Form.Item>
      <Form.Item label='Price'>
        <Input name='price' onChange={(value) => props.onChangeInput(value)} />
      </Form.Item>
      <Form.Item label='Available'>
        <RangePicker
          onChange={(e) => {
            props.onChangeCalendar(
              e[0].format("DD-MM-YYYY"),
              e[1].format("DD-MM-YYYY")
            );
          }}
        />
      </Form.Item>
      <Form.Item label='Description'>
        <TextArea
          name='description'
          onChange={(value) => props.onChangeInput(value)}
          rows={4}
        />
      </Form.Item>
      <div style={{ width: "67%", marginLeft: "16.5%" }}></div>
    </Form>
  );
};

export default Location;
