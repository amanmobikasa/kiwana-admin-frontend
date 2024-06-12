// import React from 'react'
import { TooltipCustom } from "@/components/customcomponents/tooltip-custom";
import { X } from "lucide-react";

interface ImageWithTitleAndTextProps{
  imgUrl ?: string | undefined
  idx : number
  handleDeleteImage : (idx: number) => void

}

function ImageWithTitleAndText({imgUrl, idx, handleDeleteImage} : ImageWithTitleAndTextProps) {  
  return (
    <>
        <div className="border-[0.01rem] border-gray-200 rounded-xl shadow-md drop-shadow-md relative w-full h-[25rem]">
            <div className="bg-gray-200 bg-opacity-25  hover:opacity-55 aspect-square w-full object-contain object-bottom">
                {imgUrl && <img src={imgUrl} loading="lazy" className="object-contain h-fit rounded-xl w-full object-bottom" alt="iphone-new" />}
            </div>
            <TooltipCustom tooltipContent="Remove the Banner">
            <div onClick={()=>handleDeleteImage(idx)} className="absolute cursor-pointer top-[1rem] right-[1rem] border-[0.01rem] text-gray-500 z-10 border-gray-500 p-1 cursor-pointer rounded-full hover:bg-opacity-45">
                <X  />
            </div>
            </TooltipCustom>
        </div>
    </>
  )
}

export default ImageWithTitleAndText;