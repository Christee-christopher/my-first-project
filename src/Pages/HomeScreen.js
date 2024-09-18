import React from 'react'
import {PersonCard} from'../components/PersonCard';

const firstName ='Micheal'
const myName = 'Christee'
const occupation ='Software Developer'
let year = 2024
const animal = 'Dog'
const animalName ='Bernard'

const data= [
  {
    firstName: 'Christee',
    gender: 'female',
    phone: '09071689831',
    color: 'Purple'
  
  },
  {
    firstName: 'Christian',
    gender: 'male',
    phone: '09071689831',
    color: 'gray'
  
  },
  {
    firstName: 'Moses',
    gender: 'male',
    phone: '09071689831',
    color: 'Blue'
  
  },
  {
    firstName: 'Glory',
    gender: 'female',
    phone: '09071689831',
    color: 'Green'
  
  }
]


function HomeScreen() {
  return (
    <div className='flex flex-col px-[80px]'>
        <p>Hello <span className='firstname'>{firstName}</span> , my name is <span className='myName'> {myName}</span>.</p>
      <p>I am a  <span className='occupation'>{occupation}</span></p>
      <p>I started out in <span className='year'>{year}</span></p>
      <p>I have a <span className='animal'>{animal}</span> whose name is <span className='petname'>{animalName}</span> . </p>
      
      {data.map((item, index) =>(
        <div key ={index} className= 'flex  flex-wrap px-[80px]  gap-3'>
          <PersonCard item={item} />
          </div>
      ))}
    </div>
  )
}

export default HomeScreen