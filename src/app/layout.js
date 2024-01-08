import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header.jsx'
import NavBar from '../components/Navbar'


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
      
      <Header />
      <NavBar />
      <SearchBox />
      {children}
      
      </body>
    </html>
  )
}
