import React from 'react'

const Book = ({item}) => {
    const harry = item 
  return (
    <div className='border-white border-4 h-[100%]'>
      <div className='overflow-hidden'>
      <img src={harry.cover} alt={harry.title} className='w-full rounded h-96' />
      </div>

        <div className='p-2 font-bold text-md '>
        <h1>{harry.title}</h1>
        </div>

        <div className='p-2'>
        <p>{harry.releaseDate}</p>
        <p>Pages: {harry.pages}</p>
        </div>

        <div className='text-justify line-clamp-4 mb-4'>
           <p>{harry.description}</p>
           </div>
        
      


    </div>
  )
}

export default Book