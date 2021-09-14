import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Color = ({ colors }) => {
  const { color } = useParams()
  const colr = colors.filter((c) => c.colorName === color)

  return (
    <div style={{backgroundColor: colr[0].colorHex}}>
      <h1>This is {colr[0].colorName}</h1>
      <h2>Isn't it beautiful?</h2>
      <Link to='/colors'>Go Back</Link>
    </div>
  )
}

export default Color