import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MyApp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Slider {...settings} className="w-full h-full">
        <div className="h-full w-full">
          <img src="/images/img1.jpg" className="h-50 w-50 object-cover hover:opacity-75 transition-opacity duration-300" />
        </div>
        <div className="h-full w-full">
          <img src="/images/img2.jpg" className="h-50 w-50 object-cover hover:opacity-75 transition-opacity duration-300" />
        </div>
        <div className="h-full w-full">
          <img src="/images/img3.jpg" className="h-50 w-50 object-cover hover:opacity-75 transition-opacity duration-300" />
        </div>
      </Slider>
    </div>
  );
}

export default MyApp;
