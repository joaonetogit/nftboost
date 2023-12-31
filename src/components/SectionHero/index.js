// Core
import { useRef } from "react";
import Image from "next/image";

// Libraries
import gsap from 'gsap';

// Components
import Container from "../Container";
import Cards from "./Cards";

// Medias
import iconBoost from 'public/icon-boost.svg'
import nftSmall from 'public/nft-small.png'
import nftDoubleSmall from 'public/double-nft.png'
import GooglePlay from 'public/google.svg'
import AppleStore from 'public/apple.svg'

export default function SectionHero() {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const storesRef = useRef(null);
  const imagesLeftRef = useRef(null);
  const imagesRightRef = useRef(null);

  return (
    <section className="pt-36 bg-hero-pattern bg-no-repeat bg-top overflow-hidden">
      <Container className='flex flex-col items-center'>
        <h3 className="flex items-center gap-2 text-sm mb-3 @tablet:text-base @desktop:text-xl">
          <Image src={iconBoost} alt="Icon Boost" />       <span>Adentre um reino de possibilidades infinitas</span>
        </h3>
        <h1 className="text-5xl/normal text-center font-poppins mb-4 @desktop:text-7xl">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 rounded-full border border-white border-opacity-5 w-24 @desktop:w-32">
            <Image
              src={nftSmall}
              alt="NFT Small"
              className="w-11 @desktop:w-auto"
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
        <p className="w-full text-center text-sm text-white text-opacity-80 mb-6 @tablet:text-base @tablet:max-w-3xl @desktop:text-xl @desktop:max-w-2xl @desktop:mb-9">Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.</p>

        <div className="flex flex-col items-center gap-4 @tablet:flex-row @desktop:gap-6">
          <button>
            <Image src={GooglePlay} alt="GooglePlay" />
          </button>
          <button>
            <Image src={AppleStore} alt="AppleStore" />
          </button>
        </div>
        <Cards />

        <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36"></div>
      </Container>
    </section>
  )
}
