import { deleteUser, fetchUsers } from './_actions';

export default async function UserList() {
  const users = await fetchUsers();

  if (!users || users.length === 0) {
  } else {
    users.reverse();

    return (
      <div className='pt-12'>
        <h2 className='pb-1'>Users</h2>
        {users.map((user) => (
          <div
            className='h-auto w-full bg-black rounded border border-white/70 mb-2 p-2'
            key={user.id}
          >
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                <div>{user.name}</div>
                <div className='text-white/50'>{user.email}</div>
              </div>
              <div className='flex items-center justify-end w-full'>
                <form action={deleteUser}>
                  <input type='hidden' name='userId' value={user.id} />
                  <button className='bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded'>
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
