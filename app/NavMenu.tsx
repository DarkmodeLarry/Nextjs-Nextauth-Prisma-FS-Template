import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignOutButton } from '@/components/buttons'
import AuthCheck from '@/components/AuthCheck'
import { BsYinYang } from 'react-icons/bs'

export default function NavMenu() {
  return (
    <nav className='flex items-center bg-gray-300'>
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
        <li>
          <SignInButton />
        </li>

        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  )
}
