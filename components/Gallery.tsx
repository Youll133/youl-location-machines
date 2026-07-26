"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery({
  images,
}: {
  images: string[];
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      style={{
        width: "100%",
        borderRadius: "20px",
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              width: "100%",
              background: "#f3f4f6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              overflow: "hidden",
              minHeight: "300px",
              maxHeight: "550px",
            }}
          >
            <img
              src={img}
              alt={`Photo ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
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