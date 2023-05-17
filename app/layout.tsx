import NavMenu from '@/app/NavMenu'
import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'
import AuthProvider from './AuthProvider'

const myFont = Open_Sans({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={myFont.className}>
          <div className=''>
            <NavMenu />
            <main className='h-screen bg-slate-600'>{children}</main>
          </div>
        </body>
      </html>
    </AuthProvider>
  )
}
