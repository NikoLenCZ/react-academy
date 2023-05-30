import React, { useState } from 'react'
import { Button } from './Button';


export const Animal = (props) => {
  // const { animal } = props;
  const [animals, setAnimals] = useState(["🦒 žirafa", "🐘 slon", "🦬 zubr", "🦏 nosorožec"]);

  const [value, setValue] = useState("")

  const handleDeleteAnimals = () => {
    setAnimals([])
  }


const handleInputChange = (event) => {
   setValue(event.target.value)
  // console.log(event.target.value);
}

  const handleAddAnimals = () => {
      setAnimals([...animals, value]);
      setValue("");
  }

  return (
    <div className='animalBox'>
    {animals.length === 0 ? (<h1 className='headlineEmpty'>This zoo is too empty 😢</h1>)
    :
    (
      <>
    <h1 className='animalHeadline'>{props.children}</h1>
    <ul className='animalList'>
        {animals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
      </>

    )
  }

  <input className='my-6 rounded-sm outline outline-indigo-800'
  type="text"
  value={value}
  onChange={handleInputChange} />

  <div className="ap-btn-box">
  <Button type="primary" size="sm" onClick={handleAddAnimals}>přidej zvíře</Button>
<Button type="secondary" size="sm" onClick={handleDeleteAnimals}>smaž zvířata</Button>
  </div>
  
    </div>

  )
}
