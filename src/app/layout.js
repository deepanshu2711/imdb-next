import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header.jsx'
import NavBar from '../components/NavBar.jsx'
import Providers from './Providers.jsx'

import SearchBox from '../components/SearchBox.jsx'

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
