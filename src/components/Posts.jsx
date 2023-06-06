import React, { useEffect, useState } from 'react';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));

  }, []);


  return (
    <section className='grid gap-5 place-items-center my-9'>
      <h2 className='text-2xl font-bold my-7'>Posts</h2>
      {/* <ul>
        { posts.map((post) => (
          <li key={ post.id }>{ post.title }</li>
        )) }
      </ul> */}

      <div className='flex flex-wrap justify-center gap-5'>
        { posts.map((post) => (
          <article className='flex flex-wrap p-5 border rounded shadow-sm border-slate-400 w-96 h-80'>
            <h3 className='text-lg font-bold' key={ post.id }>{ post.title }</h3>
            <p className='text-md text-slate-600' key={ post.id }>{ post.body }</p>
          </article>
        )) }
      </div>

    </section>
  );
};
