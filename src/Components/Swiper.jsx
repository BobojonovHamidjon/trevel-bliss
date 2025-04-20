import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/images/America.jpg",
  "/images/America.jpg",
  "/images/America.jpg",
];

const Swiper = () => {
  return (
    <div className="w-full max-w-[1320px]  mx-auto py-10 px-4">
      <div className="w-full aspect-[11/5] rounded-xl overflow-hidden shadow-lg bg-black">
        <SwiperComponent
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default Swiper;
