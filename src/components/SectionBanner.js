"use client";

import Image from "next/image";

import Container from "./Container";

import GooglePlay from "public/google.svg";
import AppleStore from "public/apple.svg";

import useBanner from "@/hooks/useBanner";

export default function SectionBanner() {
  const { bannerRef } = useBanner();

  return (
    <section>
      <Container>
        <div
          className="w-full bg-cover bg-banner bg-no-repeat flex flex-col items-center justify-center py-10 px-2 text-center rounded-xl @laptop:h-area-banner @laptop:p-0"
          ref={bannerRef}
        >
          <h2 className="mb-4 max-w-4xl text-4xl text-white font-semibold font-poppins @laptop:text-6xl/tight">
            Abra as Portas para a Próxima Revolução Digital!
          </h2>
          <p className="text-base max-w-xl mb-6 @laptop:text-xl">
            Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo
            Digital. Sua Oportunidade, Sua História
          </p>
          <div className="flex flex-col items-center gap-4 @tablet:flex-row @laptop:gap-6">
            <button>
              <Image src={GooglePlay} alt="GooglePlay" />
            </button>
            <button>
              <Image src={AppleStore} alt="AppleStore" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
