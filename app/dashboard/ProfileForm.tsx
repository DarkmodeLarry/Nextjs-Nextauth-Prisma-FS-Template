'use client'

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image')
    }

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    await res.json()
  }

  return (
    <div className='p-4 m-5 rounded-sm shadow-md bg-slate-700 shadow-slate-200'>
      <h2 className='text-2xl tracking-widest'>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' defaultValue={user?.name ?? ''} />
        <label htmlFor='bio'>Bio</label>
        <textarea name='bio' cols={30} rows={10} defaultValue={user?.bio ?? ''}></textarea>
        <label htmlFor='age'>Age</label>
        <input type='text' name='age' defaultValue={user?.age ?? 0} />
        <label htmlFor='image'>Profile Image URL</label>
        <input type='text' name='image' defaultValue={user?.image ?? ''} />

        <button className='px-3 my-4 rounded-md bg-slate-200 text-slate-600' type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}
