import React from "react";
import Navbar from "../page-home/Navbar";
import Info from "../page-details/Info";
import CollagePhotos from "../page-details/CollagePhotos";

const DetailPage = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <CollagePhotos />
      <br></br>
      <Info />
      <br></br>
    </div>
  );
};

export default DetailPage;
