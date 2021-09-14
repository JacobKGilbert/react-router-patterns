import React from 'react'
import { useParams } from 'react-router-dom'
import './DogDetails.css'

const DogDetails = ({ dogs }) => {
  const { name } = useParams()
  const dog = dogs.filter(d => d.name === name)

  return (
    <div className="DogDetails">
      <img src={dog[0].src} alt={`of ${dog[0].name}`} />
      <div>
        <h3>{dog[0].name}</h3>
        <p>Age: {dog[0].age}</p>
        <h4>Facts</h4>
        <ul>
          {dog[0].facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DogDetails