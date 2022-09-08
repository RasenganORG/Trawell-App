import { Form, Input, DatePicker } from "antd";
import Gmap from "../g-maps/Gmap";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Location = (props) => {
  return (
    <div style={{ marginTop: 50 }}>
      <Gmap />
      <Form
        style={{ width: "80%", marginLeft: "10%" }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout='horizontal'
      >
        {/* <MyMap /> */}
        <Form.Item label='Country' style={{ marginTop: 20 }}>
          <Input
            name='country'
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='City'>
          <Input name='city' onChange={(value) => props.onChangeInput(value)} />
        </Form.Item>
        <Form.Item label='Street adress'>
          <Input
            name='street'
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='Price'>
          <Input
            name='price'
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='Available'>
          <RangePicker
            onChange={(e) => {
              props.onChangeCalendar(
                e[0].format("YYYY-MM-DD"),
                e[1].format("YYYY-MM-DD")
              );
            }}
          />
        </Form.Item>
        <Form.Item label='Add photo'>
          <Input
            name='photos'
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='Description'>
          <TextArea
            name='description'
            onChange={(value) => props.onChangeInput(value)}
            rows={4}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Location;
