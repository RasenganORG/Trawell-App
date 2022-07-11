import { Form, Input, Select, DatePicker, InputNumber } from "antd";
import map from "../../images/map-sample.png";
import MapComp from "../map/MapComp";

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
      <div style={{ width: "67%", marginLeft: "16.5%" }}>
        <MapComp />
      </div>
    </Form>
  );
};

export default Location;
