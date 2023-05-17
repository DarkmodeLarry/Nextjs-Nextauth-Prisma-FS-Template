import UserCard from '@/components/UserCard/UserCard'
import { prisma } from '@/lib/prisma'

export default async function Users() {
  const users = await prisma.user.findMany()

  return (
    <div className='flex text-black bg-slate-400'>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}
