import { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

const GalleryTest = () => {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/files");
      const data = await res.json();
      console.log("data", data);
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div>
      {imageIds &&
        imageIds.map((imageId, index) => (
          <Image
            key={index}
            cloudName='dtxkpdf4o'
            publicId={imageId}
            width='300'
            crop='scale'
          />
        ))}
    </div>
  );
};

export default GalleryTest;
