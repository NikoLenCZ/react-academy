import React, { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => setError(error));
  }, []);

  if (error) return <div>Error: { error.message }</div>;

  return (
    <div className='grid place-items-center my-9 lg:max-w-[80%] mx-auto'>
      <h2 className='text-2xl font-bold mb-7'>Users</h2>
      <ul className='flex flex-wrap justify-center gap-5'>
        { users.map((user) => (
          <li className='px-5 py-3 border rounded shadow border-slate-500 hover:bg-yellow-50' key={ user.id }>{ user.name }</li>
        )) }
      </ul>
    </div>

  );
};
