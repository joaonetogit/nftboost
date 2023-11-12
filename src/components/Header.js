// Core
import Image from "next/image";
import Link from "next/link";

// Components
import Container from "./Container";

// Constants
import { navLinks } from "@/constants/Header";

// Medias
import Logo from 'public/logo.svg'
import IconHamburguer from 'public/icon-hamburger.svg'

export default function Header() {
  return (
    <header className="py-6 @laptop:">
      <Container className='flex items-center justify-between'>
        <Image src={Logo} alt="Logo" className="max-w-logo" />
        <nav className="hidden @laptop:flex items-center gap-12">
          {navLinks.map((nav, index) => (
            <Link className="font-medium font-inter hover:text-blue-primary transition-all ease-linear" key={index} href={nav.href} >{nav.label}</Link>
          ))}
        </nav>
        <button className="hidden @laptop:flex bg-blue-primary rounded-full py-4 px-7 font-medium hover:bg-blue-700 transition-all ease-linear">Conectar empresa</button>
        <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden">
          <Image src={IconHamburguer} alt="Icon Hamburguer" />
        </button>
      </Container>
    </header>
  )
}
