import React, { useEffect, useState} from 'react'

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json))
  
  }, []);


  return (
    <>
      <h1 className='text-2xl font-bold'>Posts</h1>
      <ul>
        {posts.map((post) =>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
