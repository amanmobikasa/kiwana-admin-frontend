import { Flex, Heading } from "@radix-ui/themes"
import { multiple_range_comp_json } from "@/json/multiple-range-comp-json"
import { RangeComp } from "@/common/range-comp"

export const MultipleRangeComponent =()=> {
  return <>
    <div className="w-full h-[22rem] bg-white aspect-square relative overflow-hidden rounded-xl">
        <div className="p-[1rem] w-full h-full space-y-[1rem]">
            <div>
                <Heading as="h5" weight={"medium"} className="font-poppin text-x;">Most Sold Items</Heading>
            </div>
            <div className="">
                <Flex className="w-full h-full" direction={"column"} display={"flex"} gap={"4"}>
                {
                    multiple_range_comp_json.map((item, i)=>{
                        return <RangeComp
                            key={i}
                            category={item?.category_name}
                            percentage={item?.percentage}
                            range={item?.range}
                            tooltipContent={item?.tooltipContent}
                        />
                    })
                }
                </Flex>
            </div>
        </div>
    </div>
  </>

}




 