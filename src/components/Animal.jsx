import React from 'react'

export const Animal = (props) => {
  const { animal } = props;

  return (
    <div className='animalBox'>
    {animal.length === 0 ? (<h1>This zoo is too empty 😢</h1>)
    :
    (
      <>
    <h1 className='animalHeadline'>{props.children}</h1>
    <ul className='animalList'>
        {animal.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
      </>

    )
  }

    </div>

  )
}
