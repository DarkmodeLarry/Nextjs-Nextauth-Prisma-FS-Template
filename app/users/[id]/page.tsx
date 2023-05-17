import FollowButton from '@/components/FollowButton/FollowButton'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import Image from 'next/image'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  return { title: `User profile of ${user?.name}` }
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image, id } = user ?? {}

  return (
    <div className='m-10 font-semibold text-white'>
      <h1>{name}</h1>

      <Image
        width={300}
        height={300}
        src={image ?? '/public/BatmanAvatar.png'}
        alt={`${name}'s profile`}
        className='rounded-sm shadow-sm shadow-gray-300'
      />

      <h3>Bio</h3>
      <p>{bio}</p>

      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  )
}
