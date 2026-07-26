"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function Gallery({
  images,
}: {
  images: string[];
}) {
  return (
    <Swiper
  modules={[Navigation, Pagination, Zoom]}
  navigation
  pagination={{ clickable: true }}
  zoom={true}
  spaceBetween={20}
  slidesPerView={1}
  style={{
    width: "100%",
    borderRadius: "20px",
  }}
>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-zoom-container">
            <img
              src={img}
              alt={`Photo ${index + 1}`}
              style={{
                width: "100%",
                maxHeight: "550px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}