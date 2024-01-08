import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Providers from './Providers'

import SearchBox from '../components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imdb',
  description: 'Imbd clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Header />
      <NavBar />
      <SearchBox />
      {children}
      </Providers>
      </body>
    </html>
  )
}
