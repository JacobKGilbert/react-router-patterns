import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({ dogs }) => {
  return (
    <nav>
      <NavLink to="/dogs">Home</NavLink>
      {dogs.map((dog) => (
        <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
      ))}
    </nav>
  )
}

export default Navbar