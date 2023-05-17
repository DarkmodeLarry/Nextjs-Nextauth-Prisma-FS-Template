import Link from 'next/link'
import Image from 'next/image'

interface Props {
  id: string
  name: string | null
  age: number | null
  image: string | null
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className='bg-[#f1f1f1] w-40 m-5 rounded-sm'>
      <Image
        width={300}
        height={300}
        src={image ?? '../../public/BatmanAvatar.png'}
        alt={`${name}'s profile`}
        className='w-40 h-32 mb-2 object-fit'
      />
      <div className='px-2'>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}
