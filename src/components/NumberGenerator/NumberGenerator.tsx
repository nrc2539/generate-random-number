import React from 'react'
import Container from '../Container'
import { NumberGeneratorProps } from './interface'

function NumberGenerator({ digit }: NumberGeneratorProps) {
  return (
    <Container className='flex flex-col items-center'>
      <div className=' text-2xl text-center font-medium mb-5'>
        Generate Random Number
      </div>
      <div className='mx-auto  w-fit flex items-center space-x-2'>
        {Array(digit)
          .fill(null)
          .map((v, index) => (
            <div key={index} className='p-3 rounded-md bg-gray-300'>
              -
            </div>
          ))}
      </div>
      <button
        type='button'
        className='mt-5 py-2 px-4 bg-blue-500 rounded-md text-white font-medium'
      >
        <span>Generate!</span>
      </button>
    </Container>
  )
}

export default NumberGenerator
