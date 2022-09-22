import { Form, Input, DatePicker, AutoComplete, Spin } from "antd";
import Gmap from "../g-maps/Gmap";
import { useSelector } from "react-redux";

import Spinner from "../Spinner";

import { useDispatch } from "react-redux";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Location = (props) => {
  const { autoCompleteData, isLoading } = useSelector((state) => state.rooms);

  const { formData, setFormData } = props.formInfo;

  const { countryf, cityf, streetf } = autoCompleteData;
  console.log("autocomplete data in location", autoCompleteData);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div style={{ marginTop: 50 }}>
      <Gmap formInfo={props.formInfo} />
      <p></p>
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
        <Form.Item label='Country' style={{ marginTop: 20 }}>
          <Input
            name='country'
            value={formData.location.country ? formData.location.country : ""}
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='City'>
          <Input
            name='city'
            value={formData.location.city ? formData.location.city : ""}
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='Street adress'>
          <Input
            name='street'
            value={formData.location.street ? formData.location.street : ""}
            onChange={(value) => props.onChangeInput(value)}
          />
        </Form.Item>
        <Form.Item label='Listing name'>
          <Input
            name='listingName'
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
