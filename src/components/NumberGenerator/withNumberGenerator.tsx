import React from 'react'
import { NumberGeneratorProps, WithNumberGeneratorProps } from './interface'

export function withNumberGenerator(Component: React.FC<NumberGeneratorProps>) {
  function WithNumberGenerator({ digit = 6 }: WithNumberGeneratorProps) {
    const newProps: NumberGeneratorProps = {
      digit,
      text: 'test',
    }
    return <Component {...newProps} />
  }
  return WithNumberGenerator
}
