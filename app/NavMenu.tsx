import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignOutButton } from '@/components/buttons'
import AuthCheck from '@/components/AuthCheck'
import { BsYinYang } from 'react-icons/bs'

export default function NavMenu() {
  return (
    <nav className='flex items-center justify-between w-full bg-gray-300 px-[5%]'>
      <div className='flex items-center'>
        <Link href={'/'}>
          <BsYinYang className='w-10 h-10' />
        </Link>
        <ul className={'links'}>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/users'}>Users</Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-4'>
        <span>
          <SignInButton />
        </span>

        <span>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </span>
      </div>
    </nav>
  )
}
