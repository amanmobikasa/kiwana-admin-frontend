import type { ComponentProps } from 'react'

interface FormWrapperProps extends ComponentProps<"form">  {
    children ?: React.ReactNode | React.ReactNode[]
}

export const FormWrapper =({children, ref, ...rest } : FormWrapperProps)=> {
  return (
    <>
        <form ref={ref} {...rest} className='my-[2rem]'>
            {children}
        </form>
    </>
  )
}

