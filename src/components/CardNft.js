// Core
import React from 'react'
import Image from 'next/image'

// Images
import ImageNft01 from 'public/img-nft/01.jpg'
import IconHeart from 'public/icon-heart.svg'
import IconVerify from 'public/verify.svg'
import IconETH from 'public/verify.svg'
import IconTime from 'public/icon-clock.svg'

export default function CardNft() {
  return (
    <div>
      <div>
        <Image src={ImageNft01} alt='Imagem NFT' />
        <div>
          <Image src={IconHeart} alt='Icon Heart' />
          <small>0</small>
        </div>
      </div>
      <div>
        <h4>Cartoon Collection
          <Image src={IconVerify} alt='Icon Verify' />
        </h4>
        <h3>Cat #221</h3>

        <div>
          <div>
            <span>Preço atual</span>
            <h3><Image src={IconETH} alt='Icon ETH' /> 0.0721 BTC</h3>
          </div>
          <h5>R$ 602,02</h5>
        </div>

        <button>Buy now</button>

        <div>
          <Image src={IconTime} alt='Icon Time' />
          <p>Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  )
}
