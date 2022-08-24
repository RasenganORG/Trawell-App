import { Form, Input, DatePicker } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const UpdateLocation = (props) => {
  const { defaultValue } = props;

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
          value={defaultValue.country ? defaultValue.country : ""}
          onChange={(value) => props.onChangeInput(value)}
        />
      </Form.Item>
      <Form.Item label='City'>
        <Input
          value={defaultValue.city ? defaultValue.city : ""}
          name='city'
          onChange={(value) => props.onChangeInput(value)}
        />
      </Form.Item>
      <Form.Item label='Street adress'>
        <Input
          value={defaultValue.street ? defaultValue.street : ""}
          name='street'
          onChange={(value) => props.onChangeInput(value)}
        />
      </Form.Item>
      <Form.Item label='Price'>
        <Input
          value={defaultValue.price ? defaultValue.price : ""}
          name='price'
          onChange={(value) => props.onChangeInput(value)}
        />
      </Form.Item>
      <Form.Item label='Available'>
        <RangePicker
          placeholder={[defaultValue.availableFrom, defaultValue.availableTo]}
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
          value={defaultValue.photos ? defaultValue.photos : ""}
          name='photos'
          onChange={(value) => props.onChangeInput(value)}
        />
      </Form.Item>
      <Form.Item label='Description'>
        <TextArea
          value={defaultValue.description ? defaultValue.description : ""}
          name='description'
          onChange={(value) => props.onChangeInput(value)}
          rows={4}
        />
      </Form.Item>
      <div style={{ width: "67%", marginLeft: "16.5%" }}></div>
    </Form>
  );
};

export default UpdateLocation;
