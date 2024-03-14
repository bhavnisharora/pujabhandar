import React from "react";
import Slider from "react-slick";

const HeroData = [
  {
    id: 1,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117628.jpg",
  },
  {
    id: 2,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117622.jpg",
  },
  {
    id: 3,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117603.jpg",
  },
  {
    id: 4,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117614.jpg",
  },
];
const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ marginTop: "50px" }}>
      {/* hero section */}
      <div className="w-full pb-8 sm:pb-0">
        <Slider {...settings}>
          {HeroData.map((data) => (
            <>
              <div key={data.id}>
                <div>
                  <div></div>
                </div>
                {/* image section  */}
                <div>
                  <img
                    src={data.img}
                    className="hero-image drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
