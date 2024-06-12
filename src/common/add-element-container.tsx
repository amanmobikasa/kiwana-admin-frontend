// import React from 'react'

import { CircleFadingPlus } from "lucide-react"



interface AddElementContainerPropsType{
    children ?: React.ReactNode | React.ReactNode[]
    hideAddBtn ?: false | true
    heading ?: string
}

function AddElementContainer({children, hideAddBtn, heading} : AddElementContainerPropsType) {
  return (
    <>
        <div className="current_banner_container bg-white h-[30%] rounded-xl ">
            <div className="p-[2rem] space-y-[1rem]">
                <div>
                    {heading && <h2 className="text-[1.5rem] font-[600] font-poppin">{heading}</h2>  }
                </div>
                <div className="flex  gap-x-[10px] justify-start w-full h-fit overflow-hidden">
                    {children}
                    {/* {!hideAddBtn && <div className="h-[25rem] w-4/12 flex items-center justify-center ">
                        <button className="text-blue-600 font-[500] text-[1.4rem] font-poppin flex gap-x-3 hover:text-blue-700 hover:underline items-center"><span><CircleFadingPlus /></span> Add More Banner</button>
                    </div>} */}
                </div>
            </div>
        </div>
    </>
  )
}

export default AddElementContainer