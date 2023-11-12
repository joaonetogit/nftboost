// Core
import Image from 'next/image'

// Medias
import IconVerify from 'public/verify.svg'
import IconETH from 'public/icon-eth.svg'

export default function CardCollector({ index, image, name, valueBtc, percent }) {
  return (
    <div className='w-full max-w-card-collector bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5'>
      <div className='flex items-center gap-6'>
        <strong className='font-semibold'>{index}</strong>
        <div className='flex items-center gap-4'>
          <div className='relative w-10 h-10'>
            <div className='w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5'>
              <Image src={image} alt='Image NFT' className='w-full h-full object-cover' />
            </div>
            <Image src={IconVerify} alt='Icon verify' className='absolute -bottom-1 -right-1' />
          </div>
          <div className='space-y-1'>
            <h4 className='font-semibold'>{name}</h4>
            <p className='flex items-center gap-1 text-sm text-white text-opacity-70'>Preço mínimo
              <span className='flex items-center gap-1 font-semibold text-sm'>
                <Image src={IconETH} alt='Icon ETH' />
                {valueBtc} BTC
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-1 text-right'>
        <strong className='text-green-primary font-bold'>{percent}</strong>
        <span className='flex items-center gap-1 font-semibold text-sm'>
          <Image src={IconETH} alt='Icon ETH' />
          {valueBtc} BTC
        </span>
      </div>
    </div>
  )
}
