import { fetchUsers } from './_actions';

export default async function UserList() {
  const users = await fetchUsers();

  if (!users || users.length === 0) {
  } else {
    return (
      <div>
        <h2>Users</h2>
        {users.map((user) => (
          <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <form action={deleteUser}>
              <button>Delete</button>
            </form>
          </div>
        ))}
      </div>
    );
  }
}
