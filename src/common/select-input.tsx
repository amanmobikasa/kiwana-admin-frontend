import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ComponentProps } from "react";

interface SelectInputProps extends ComponentProps<typeof Select> {
  optionArr: object[];
}

export const SelectInput = ({ optionArr, ...props }: SelectInputProps) => {



  return (
    <>
      <Select {...props}>
        <SelectTrigger  className="w-full scroll-smooth font-poppin rounded-xl bg-indigo-100 border-[0.01rem] border-gray-500 ">
          <SelectValue  placeholder="Status" className="placeholder:text-xs placeholder:text-gray-600" />
        </SelectTrigger>
        <SelectContent  className="bg-white group-hover:bg-indigo-200">
            { 
                optionArr.length > 0 && optionArr.map((item : any, index : number)=>{
                    return <>
                    <SelectItem className="placeholder:text-sm" key={index} value={item}>{item}</SelectItem>
                    </>
                })
            }
        </SelectContent>
      </Select>
    </>
  );
};
