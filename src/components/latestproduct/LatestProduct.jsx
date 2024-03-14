// import React, { Component } from "react";
import Slider from "react-slick";
import Img from "../../assets/latestproduct/1.jpeg";
import Img3 from "../../assets/latestproduct/3.jpg";
import Img4 from "../../assets/latestproduct/4.jpeg";
import Img5 from "../../assets/latestproduct/5.jpeg";
import Img6 from "../../assets/latestproduct/6.jpg";
import Img7 from "../../assets/latestproduct/7.jpeg";
import Img8 from "../../assets/latestproduct/8.jpeg";
import Img9 from "../../assets/latestproduct/9.jpeg";
import Img10 from "../../assets/latestproduct/10.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const services = [
  {
    id: 1,
    img: Img,

    title: "bracelet silver",
    price: "4000",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img3,
    title: "mala hamititle",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img4,
    title: "mala coral",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img5,
    title: "tulsi mala",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img6,
    title: "mala tulsi silver",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img7,
    title: "bracelet ons silver",

    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img8,
    title: "bracelet rudraksh",

    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img9,
    title: "silver rudraksh",

    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img10,
    title: "mala coral",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
];

const Services = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py-10 mb-10 " style={{ marginTop: "150px" }}>
        <div className="container">
          {/* Heading section */}
          <div className="mb-10 ">
            <h1
              data-aos="fade-up"
              className="font-serif text-primary text-3xl font-bold lg:text-4xl"
            >
              Latest Products
            </h1>
          </div>
          <div className="mt-20 ">
            <Slider {...settings}>
              {services.map((data, index) => (
                <div key={index} className="cursor-pointer">
                  <div className="">
                    <img
                      src={data.img}
                      alt=""
                      style={{ height: "120px", width: "auto" }} // Adjust dimensions here
                      className="text-center object-cover rounded-md scale-75 hover:scale-90 transition duration-300 ease-in-out w-full"
                    />
                  </div>
                  <div className="text-center font-semibold text-xl hover:text-primary transition duration-300 ease-in-out ">
                    <p className="uppercase"> {data.title} </p>
                    <p>{data.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// import React from "react";
// import Slider from "react-slick";
// import Img from "../../assets/products/image.jpg";
// import Img2 from "../../assets/products/image.jpg";
// import Img3 from "../../assets/products/image.jpg";
// import Img4 from "../../assets/products/image.jpg";
// import Img5 from "../../assets/products/image.jpg";
// import Img6 from "../../assets/products/image.jpg";
// import Img7 from "../../assets/products/image.jpg";

// const latestdata = [
//   {
//     id: 1001,
//     img: Img,
//     title: "Today's Horoscope",
//   },
//   {
//     id: 1002,
//     img: Img2,

//     title: "Free Kundli",
//   },
//   {
//     id: 1003,
//     img: Img3,
//     title: "Compatibility",
//   },
//   {
//     id: 1004,
//     img: Img4,
//     title: "Today's Horoscope",
//   },
//   {
//     id: 1005,
//     img: Img5,
//     title: "Festival 2024",
//   },
//   {
//     id: 1006,
//     img: Img6,
//     title: "Kundli Matching",
//   },
//   {
//     id: 1007,
//     img: Img7,
//     title: "Today's Panchang",
//   },
// ];

// const LatestProduct = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div>
//       <div className="mt-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
//           <Slider {...settings}>
//           {latestdata.map((data, index) => (
//             <div data-aos="zoom-in" data-aos-delay="100" className="my-6">
//               <div
//                 key={index}
//                 className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative"
//               >
//                 <div className="mb-4">
//                   <img
//                     src={data.img}
//                     alt=""
//                     className="rounded-full w-20 h-20 object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col items-center gap-4">
//                   <div className="space-y-3">
//                     {/* <p className="text-xs text-gray-500">{data.desc}</p> */}
//                     <h1 className="text-xl font-bold text-black/80">
//                       {data.title}
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             //   <div key={index} className="cursor-pointer">
//             //     <div>
//             //       <img
//             //         src={data.img}
//             //         alt=""
//             //         className="[h-180px] w-[260px] object-cover rounded-md scale-75
//             //         hover:scale-90 transition duration-300 ease-in-out"
//             //       />
//             //     </div>
//             //     <div className="font-semibold text-xl hover:text-primary transition duration-300 ease-in-out">
//             //       <p> {data.title} </p>
//             //       <p>{data.price}</p>
//             //     </div>
//             //   </div>
//           ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestProduct;
