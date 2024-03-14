import React from "react";
import Slider from "react-slick";
const services = [
  {
    id: 1,
    img: "/src/assets/services/1.png",

    title: "Today's Horoscope",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: "/src/assets/services/2.png",
    title: "Free Kundli",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: "/src/assets/services/3.png",
    title: "Compatibility",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: "/src/assets/services/4.png",
    title: "Today's Horoscope",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: "/src/assets/services/5.png",
    title: "Festival 2024",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: "/src/assets/services/2.png",
    title: "Kundli Matching",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    title: "Today's Panchang",
    img: "/src/assets/services/4.png",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
];

const Services = () => {
  var settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="mt-20">
        {/* Heding section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="font-serif text-black text-3xl font-bold lg:text-4xl "
          >
            Complimentary Astrology Services
          </h1>
        </div>
        {/* Testimonial cards section  */}
        <Slider {...settings}>
          {services.map((data) => (
            <div data-aos="zoom-in" data-aos-delay="100" className="my-6">
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative"
              >
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500">{data.desc}</p>
                    <h1 className="text-xl font-bold text-black/80">
                      {data.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
