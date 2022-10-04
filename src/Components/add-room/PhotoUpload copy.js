import { Upload } from "antd";
import { useState } from "react";

const PhotoUpload = (props) => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList, file }) => {
    const encodedArray = [];
    setFileList(fileList);
    console.log("file is", file);
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onloadend = () => {
      encodedArray.push(reader.result);
      console.log("encoded array is", encodedArray);
    };
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <Upload
      listType='picture-card'
      customRequest={({ onSuccess }) => {
        setTimeout(() => {
          onSuccess("OK");
        }, 0);
      }}
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {fileList.length < 5 && "+ Upload"}
    </Upload>
  );
};

export default PhotoUpload;
