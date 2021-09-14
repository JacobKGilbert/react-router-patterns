import React from 'react'
import { Link } from 'react-router-dom';
import './ColorIndex.css'

const ColorIndex = ({ colors }) => {
  return (
    <>
      <div className="ColorIndex-header">
        <h1>Welcome to the color factory.</h1>
        <Link to="/colors/new">Add a color</Link>
      </div>
      <div className="ColorIndex-body">
        <p>Select a color</p>
        <ul>
          {colors.map((c) => (
            <li>
              <Link to={`/colors/${c.colorName}`}>{c.colorName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ColorIndex