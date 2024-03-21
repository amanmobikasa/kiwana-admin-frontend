
import { Button } from "@/components/ui/button"
import type { ComponentProps } from 'react';

interface ButtonCommonProps extends ComponentProps<typeof Button> {
    children ?: React.ReactNode | React.ReactNode[]
    className?: string
    color? : string
}

export const ButtonCommon =({children,className, ref, color , ...rest} : ButtonCommonProps)=> {
  return (
    <>
     <Button color={color} ref={ref} className={className} {...rest}>
       
        {children}
    </Button>
    </>
  )
}

