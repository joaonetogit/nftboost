"use client";

import Image from "next/image";

import IconVerify from "public/verify.svg";
import IconETH from "public/icon-eth.svg";

import useCardCollector from "@/hooks/useCardCollector";

export default function CardCollector({
  index,
  thumbnail,
  name,
  valueBtc,
  percent,
}) {
  const { cardRef } = useCardCollector();
  return (
    <div
      className="w-full max-w-card-collector bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5"
      ref={cardRef}
    >
      <div className="flex items-center gap-4 @desktop:gap-6">
        <strong className="font-semibold">{index}</strong>
        <div className="flex items-center gap-4 @desktop:items-center">
          <div className="relative w-10 h-10">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5">
              <Image
                src={thumbnail}
                alt="Image NFT"
                className="w-full h-full object-cover"
              />
            </div>
            <Image
              src={IconVerify}
              alt="Icon verify"
              className="absolute -bottom-1 -right-1"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold">{name}</h4>
            <p className="flex flex-col items-start @desktop:items-center gap-1 text-sm text-white text-opacity-70 @desktop:flex-row">
              Preço mínimo
              <span className="flex items-center gap-1 font-semibold text-sm">
                <Image src={IconETH} alt="Icon ETH" />
                {valueBtc} BTC
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-1 text-right">
        <strong className="text-green-primary font-bold">{percent}</strong>
      </div>
    </div>
  );
}
