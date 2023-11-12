// Core
import Image from 'next/image'

// Medias
import IconHeart from 'public/icon-heart.svg'
import IconVerify from 'public/verify.svg'
import IconETH from 'public/icon-eth.svg'
import IconTime from 'public/icon-clock.svg'

export default function CardNft({ likeFavorites, thumbnail, name, valueBrl, valueBtc, }) {
  return (
    <div className='w-full max-w-card-nft overflow-hidden rounded-3xl border border-gray-border-card bg-gray-area-favorite'>
      <div className='w-full h-area-image-nft overflow-hidden relative'>
        <Image src={thumbnail} alt='Imagem NFT' className='w-full h-full object-cover' />
        <div className='hover:cursor-pointer absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-area-favorite rounded-full border border-gray-border-card'>
          <Image src={IconHeart} alt='Icon Heart' />
          <small>{likeFavorites}</small>
        </div>
      </div>
      <div className='w-full p-4'>
        <h4 className='flex items-center gap-1 text-xs font-semibold mb-1'>Cartoon Collection
          <Image src={IconVerify} alt='Icon Verify' />
        </h4>
        <h3 className='text-lg/none font-semibold mb-4'>{name}</h3>

        <div className='flex justify-between items-end mb-4'>
          <div className='space-y-1'>
            <span className='text-xs text-white text-opacity-70'>Preço atual</span>
            <h3 className='flex items-center gap-1 font-semibold text-lg/none'>
              <Image src={IconETH} alt='Icon ETH' /> {valueBtc} BTC</h3>
          </div>
          <h5 className='text-xs font-medium '>R$ {valueBrl}</h5>
        </div>

        <button className='w-full py-4 bg-blue-primary rounded-full mb-4 text-sm font-semibold hover:bg-blue-700 transition-all ease-linear'>Buy now</button>

        <div className='flex items-center gap-1 '>
          <Image src={IconTime} alt='Icon Time' />
          <p className='text-xs'>Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  )
}
