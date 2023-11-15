import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-inter' })

const poppins = Poppins({ subsets: ['latin'], weight: '600', display: 'swap', variable: '--font-poppins' })

export const openGraphImage = { images: ['https://nftboost-joao.vercel.app/logo.svg'] }

export const metadata = {
  title: 'NFTBoost - Projeto do curso Codeboost',
  description: 'Projeto desenvolvido no módulo de NextJS 13, com TailwindCSS e ShadcnUI',
  openGraph: {
    ...openGraphImage,
    title: 'NFTBoost - Projeto do curso Codeboost',
    description: 'João Pinheiro - Projeto desenvolvido no módulo de NextJS 13, com TailwindCSS e ShadcnUI',
    type: 'website',
    url: 'https://github.com/joaonetogit',
    siteName: 'NFTBoost',
    locale: 'pt-BR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/icon-boost.svg" sizes="any" />
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
