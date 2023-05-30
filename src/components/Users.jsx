import React, { useEffect, useState} from 'react'

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => setUsers(json))
    .catch((error) => setError(error));
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) =>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>

  )
}
