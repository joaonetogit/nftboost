// Core
import Image from 'next/image';

// Constants
import { footerNav } from '@/constants/Footer';

// Medias
import Logo from 'public/logo.svg'

// Components
import Container from "./Container";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-10 @laptop:pt-32 @laptop:pb-14'>
      <Container className=' flex flex-col @laptop:flex-row  justify-between gap-10'>
        <div className='text-left @tablet:max-w-footer-content'>
          <Image src={Logo} alt='Logo' className='mb-4' />
          <p className='mb-6 text-white text-opacity-70 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="w-full @tablet:w-auto bg-blue-primary rounded-full py-4 px-7 font-medium hover:bg-blue-700 transition-all ease-linear">Conectar empresa</button>
        </div>
        <div className='space-y-10 @tablet:flex @tablet:space-y-0 @tablet:gap-[88px]'>
          {footerNav.map((footer, index) => (
            <div key={index}>
              <h4 className='text-xl mb-4 font-bold'>{footer.title}</h4>
              <ul className='space-y-4'>
                {footer.items.map((item, index) => (
                  <li key={index}>
                    <Link className='text-lg text-white text-opacity-70' href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </Container>
    </footer >
  )
}
