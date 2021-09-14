import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const INITIAL_STATE = {
    colorName: '',
    colorHex: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)
  const history = useHistory()

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addColor({ ...formData })
    setFormData(INITIAL_STATE)
    history.push('/colors')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color Name</label>
        <input
          type="text"
          id="colorName"
          name="colorName"
          placeholder="Color Name"
          value={formData.colorName}
          onChange={handleChange}
        />
        <label htmlFor="colorHex">Color</label>
        <input
          type='color'
          id="colorHex"
          name="colorHex"
          value={formData.colorHex}
          onChange={handleChange}
        />
        <button>Add Color</button>
      </form>
      <Link to='/colors'>Go Back</Link>
    </>
  )
}

export default NewColorForm