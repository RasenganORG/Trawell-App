import React from "react";
import { Carousel } from "antd";
import cardOne from "../../images/travel-images/caption.jpg";
import img1 from "../../images/travel-images/c1.png";
import img2 from "../../images/travel-images/c2.png";
import img3 from "../../images/travel-images/c3.png";

const contentStyle = {
  width: "700px",
  textAlign: "center",
  margin: "auto",
  lineHeight: "160px",
};

const CarouselComp = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel effect="fade" afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img style={{ borderRadius: 30 }} alt="example" src={cardOne} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ borderRadius: 30 }} alt="example" src={img1} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ borderRadius: 30 }} alt="example" src={img2} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ borderRadius: 30 }} alt="example" src={img3} />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
