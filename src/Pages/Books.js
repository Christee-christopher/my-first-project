import React, { useEffect, useState } from 'react'
import Book from '../components/Book'

export default function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const url = 'https://potterapi-fedeperin.vercel.app/en/books';

    try {
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);

      setBooks(result)
      


    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(() => {
    fetchBooks()
  
  }, [])
  
  return (
    <div className='text-blue-50 bg-teal-950'>

      <h1 className='text-center text text-5xl font-bold mb-6'>
        HARRY BOOKS
      </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8'>
      {books.map((item, index) => (
        <div>
          <Book key={index}  item={item} />
          </div>
      ))}

    </div>
    </div>
  )
}
