"use client";

import Image from "next/image";

import CardsLeft from "public/cards-left.png";
import CardsRight from "public/cards-right.png";

import useCardsHero from "@/hooks/useCardsHero";

export default function Cards() {
  const { areaCards, imageLeft, imageRight } = useCardsHero();

  return (
    <div
      className="relative flex w-area-cards-mobile h-area-cards-mobile mt-12 @desktop:w-full @desktop:h-area-cards-desktop @desktop:mt-20"
      ref={areaCards}
    >
      <Image
        ref={imageLeft}
        src={CardsLeft}
        alt="Image cards"
        className="absolute top-0 left-8 z-10 w-1/2 h-full @desktop:w-auto @desktop:left-[25%]"
      />
      <Image
        ref={imageRight}
        src={CardsRight}
        alt="Image cards"
        className="absolute top-0 right-8 w-1/2 h-full @desktop:w-auto @desktop:right-[25%]"
      />
    </div>
  );
}
