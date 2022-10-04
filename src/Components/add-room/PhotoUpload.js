import { Upload } from "antd";

const PhotoUpload = (props) => {
  console.log("props in photoUpload", props);
  return (
    <Upload
      listType='picture-card'
      customRequest={({ onSuccess }) => {
        setTimeout(() => {
          onSuccess("OK");
        }, 0);
      }}
      fileList={props.fileList}
      onChange={props.onChangePhoto}
      onPreview={props.onPreviewPhoto}
    >
      {props.fileList.length < 5 && "+ Upload"}
    </Upload>
  );
};

export default PhotoUpload;
