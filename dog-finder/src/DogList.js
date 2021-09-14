import React from 'react'
import { Link } from 'react-router-dom';
import './DogList.css'

const DogList = ({ dogs }) => {
  return (
    <div className='DogList'>
      {dogs.map((dog) => (
        <div>
          <img src={dog.src} alt={`of ${dog.name}`} className='DogList-img'/>
          <h3>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  )
}

export default DogList