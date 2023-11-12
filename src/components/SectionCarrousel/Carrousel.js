'use client'

// Core
import Image from 'next/image';

// Libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { twMerge } from 'tailwind-merge';

// Constants
import { cardsCollections } from '@/constants/SliderCollections';

// Medias
import IconArrow from 'public/arrow.svg';

// Components
import CardNft from '../CardNft';
import { useRef } from 'react';

export default function Carrousel() {
  const buttonClasses = 'absolute top-1/2 -translate-y-1/2 bg-blue-primary hover:bg-btn-slide border border-white border-opacity-5 transition-all ease-linear flex items-center justify-center z-10 w-12 h-12 rounded-full'

  const swiperRef = useRef(null)

  return (
    <div className='relative'>
      <button 
        className={`-left-6 ${buttonClasses}`}
        onClick={() => {
          swiperRef.current?.slidePrev()
        }}
      >
        <Image
          src={IconArrow}
          alt='Icon Arrow'
        />
      </button>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={33}
        speed={800}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}

      >
        {cardsCollections.map((card, index) => (
          <SwiperSlide key={index}>
            <CardNft  {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button 
        className={`-right-6 rotate-180 ${buttonClasses}`}
        onClick={() => {
          swiperRef.current?.slideNext()
        }}
      >
        <Image
          src={IconArrow}
          alt='Icon Arrow'
        />
      </button>
    </div>
  )
}
