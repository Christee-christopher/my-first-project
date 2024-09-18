import React from 'react'

export const PersonCard = ({item}) => {
    const person= item;

  return (
    <div className= 'card-container'>
        <div className='card-details'>
            <h1> <strong></strong>{person.firstName}</h1>
            <p> <strong>Gender:</strong>{person.gender}</p>
            <p><strong>Phone:</strong>{person.phone}</p>
            <p><strong>Color:</strong>{ person.color}</p>

        </div>
    </div>
  )
}
