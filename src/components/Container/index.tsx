import cn from 'classnames'
import React from 'react'
import { FunctionComponentType } from 'src/interfaces/common/FunctionComponentType'

function Container({ children, className }: FunctionComponentType) {
  return <div className={cn('mx-auto max-w-3xl', className)}>{children}</div>
}

export default Container
