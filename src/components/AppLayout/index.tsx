import cn from 'classnames'
import { AppLayoutProps } from './interface'

function AppLayout({ children, className, title }: AppLayoutProps) {
  return (
    <div className={cn('p-10 w-screen h-screen', className)}>
      {title && <div className='text-xl'>{title}</div>}
      {children}
    </div>
  )
}

export default AppLayout
