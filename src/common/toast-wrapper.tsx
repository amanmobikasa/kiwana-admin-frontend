
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
// import { ButtonCommon } from "@/components/customcomponents/button-common";


interface ToastWrapperProps {
    variant? : "default" | "destructive"
    title  : string
    description? : string
    action? : React.ReactNode | React.ReactNode[]
}

export const ToastWrapper =({title,action,description,variant}  : ToastWrapperProps)=> {
    const { toast } = useToast()
  return toast({
        variant : variant,
        title : `${title ? title : "Uh oh! Something went wrong."}`,
        description : `${description ? description : "There was a problem with your request."}`,
        action : <ToastAction altText="Try again">{action}</ToastAction>,
    })
}

