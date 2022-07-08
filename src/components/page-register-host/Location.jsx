import { Form, Input, Select, DatePicker, InputNumber } from "antd";
import map from "../../images/map-sample.png";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Location = () => {
  return (
    <Form
      style={{ width: "100%" }}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
    >
      <Form.Item label="Country">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="City">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Street adress">
        <Input />
      </Form.Item>
      <Form.Item label="Number">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Available">
        <RangePicker />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea rows={4} />
      </Form.Item>
      <img src={map} style={{ width: "600px", marginLeft: "150px" }} />
    </Form>
  );
};

export default Location;
