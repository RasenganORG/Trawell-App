import React from "react";
import CarouselComp from "../page-details/CarouselComp";
import Navbar from "../page-home/Navbar";
import Info from "../page-details/Info";
import CalendarComp from "../page-details/CalendarComp";
import MapWrapper from "../MapWrapper";
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
      {/* <CalendarComp /> */}
    </div>
  );
};

export default DetailPage;
