"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import IconArrow from "public/arrow.svg";

import CardNft from "../CardNft";

export default function Carrousel({ data }) {
  const buttonClasses =
    "hidden @laptop:flex absolute top-1/2 -translate-y-1/2 bg-blue-primary hover:bg-btn-slide border border-white border-opacity-5 transition-all ease-linear flex items-center justify-center z-10 w-12 h-12 rounded-full";

  const swiperRef = useRef(null);

  return (
    <div className="w-full relative">
      <button
        className={`-left-6 ${buttonClasses}`}
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        <Image src={IconArrow} alt="Icon Arrow" />
      </button>
      <Swiper
        className="!px-3"
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={32}
        speed={800}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
          414: {
            slidesPerView: 1.8,
          },
          640: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.3,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <CardNft {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`-right-6 rotate-180 ${buttonClasses}`}
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        <Image src={IconArrow} alt="Icon Arrow" />
      </button>
    </div>
  );
}
