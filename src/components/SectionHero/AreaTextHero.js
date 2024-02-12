"use client";

import Image from "next/image";

import iconBoost from "public/icon-boost.svg";
import nftSmall from "public/nft-small.png";
import nftDoubleSmall from "public/double-nft.png";
import GooglePlay from "public/google.svg";
import AppleStore from "public/apple.svg";

import useAreaTextHero from "@/hooks/useAreaTextHero";

const AreaTextHero = () => {
  const { imageCircleRef, areaTextRef, googleRef, appleRef } =
    useAreaTextHero();

  return (
    <>
      <div className="flex flex-col items-center" ref={areaTextRef}>
        <h3 className="flex items-center gap-2 text-sm mb-3 @tablet:text-base @desktop:text-xl">
          <Image src={iconBoost} alt="Icon Boost" />{" "}
          <span>Adentre um reino de possibilidades infinitas</span>
        </h3>
        <h1 className="text-5xl/normal text-center font-poppins mb-4 @desktop:text-7xl">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 rounded-full border border-white border-opacity-5 w-24 @desktop:w-32">
            <Image
              src={nftSmall}
              alt="NFT Small"
              className="w-11 @desktop:w-auto"
              ref={imageCircleRef}
            />
          </div>
          Digital de
          <Image
            src={nftDoubleSmall}
            alt="NFT Double Small"
            className="inline-block w-16 mx-2 @desktop:w-auto"
          />
          Colecionáveis Únicos!
        </h1>
        <p className="w-full text-center text-sm text-white text-opacity-80 mb-6 @tablet:text-base @tablet:max-w-3xl @desktop:text-xl @desktop:max-w-2xl @desktop:mb-9">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 @tablet:flex-row @desktop:gap-6">
        <button>
          <Image
            src={GooglePlay}
            alt="GooglePlay"
            ref={googleRef}
            className="opacity-0"
          />
        </button>
        <button>
          <Image
            src={AppleStore}
            alt="AppleStore"
            ref={appleRef}
            className="opacity-0"
          />
        </button>
      </div>
    </>
  );
};

export default AreaTextHero;
