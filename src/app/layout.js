import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-inter' })

const poppins = Poppins({ subsets: ['latin'], weight: '600', display: 'swap', variable: '--font-poppins' })

export const metadata = {
  title: 'NFTBoost',
  description: 'Projeto do curso Codeboost',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
