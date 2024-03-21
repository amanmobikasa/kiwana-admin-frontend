import { BreadcrumbCommon } from "@/components/customcomponents/breadcrumb-common"
import { ButtonCommon } from "@/components/customcomponents/button-common"
import { SheetTrigger } from "@/components/ui/sheet"
import { Heading } from "@radix-ui/themes"
import { Download, Plus } from "lucide-react"



type DashboardHeadingCommonProps = {
    clickAddtoProduct : (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}

export const DashboardHeadingCommon =({clickAddtoProduct} : DashboardHeadingCommonProps)=> {
  return (
    <>
        <div className="relative w-full h-fit overflow-hidden font-poppin">
            <div className="w-full flex justify-between items-center mt-4">
                <div className="space-y-2">
                    <Heading as="h1" className="font-poppin font-[600] ">Products</Heading>
                    <BreadcrumbCommon />
                </div>
                <div className="flex items-center gap-x-4">
                    <ButtonCommon className="bg-indigo-100 text-indigo-600  space-x-2 hover:bg-indigo-200 rounded-xl px-4"  color="blue" >
                        <span>Export</span>
                        <Download className="h-4 w-4" />
                    </ButtonCommon>
                    <SheetTrigger>
                        <ButtonCommon onClick={(e)=> clickAddtoProduct(e)} className="bg-indigo-500 text-white hover:text-white space-x-2 hover:bg-indigo-600 rounded-xl px-4"  color="blue" >
                            <Plus className="h-6 w-6" />    
                            <span>Add to Product</span>
                        </ButtonCommon>
                    </SheetTrigger>
                </div>
            </div>
        </div>
    </>
  )
}

