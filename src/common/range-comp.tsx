import { TooltipCustom } from "@/components/customcomponents/tooltip-custom";
import { Text } from "@radix-ui/themes"

// insert the range comp props here
type RangeCompProps = {
    category : string,
    percentage : string | number,
    range : string | "w-[50%]"
    tooltipContent? : string
}; 

export const RangeComp =({category,percentage,range, tooltipContent} : RangeCompProps)=> {
  return  <>
    <div className="w-full h-fit relative overflow-hidden space-y-1">
        <div className="w-full flex items-center justify-between">
            <Text className="font-[500]" as="p">{category}</Text>
            <Text className="font-[500]" as="span">{percentage}</Text>
        </div>
        <TooltipCustom tooltipContent={tooltipContent}>
        <div className="relative w-full h-2 rounded-xl bg-bg-primary-bg-gray ">
            <div className={`absolute top-0 left-0 z-20 h-full rounded-full bg-indigo-600 transition-all  ease-in-out duration-500 delay-300 ${range}`}></div>
        </div>
        </TooltipCustom>
    </div>
  </>
 
}
