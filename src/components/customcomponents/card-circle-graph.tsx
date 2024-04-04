import { Heading } from "@radix-ui/themes";
import { TooltipCustom } from "./tooltip-custom";
import { numberPrefixDollar } from "@/lib/number-prefix-dollar";

// insert the card circke graph props here
type CardCircleGraphProps = {
  color: string;
  title?: string;
  rupees: number;
  sold_item?: string;
  range?: string;
};

const CardCircleGraph = ({
  color,
  title,
  rupees,
  range,
  sold_item,
}: CardCircleGraphProps) => {
  return (
    <>
      <div className="w-4/12 h-[10rem] flex justify-between rounded-xl bg-white ">
        <div className="p-[1rem] flex items-center justify-between w-full h-full">
          <div className="flex flex-col gap-y-3">
            <div>
              <span className="text-text-primary-gray font-poppin">
                Todays {title}
              </span>
            </div>
            <div>
              <Heading as="h1" className="font-[600] font-poppin">
                 {numberPrefixDollar(rupees)}
              </Heading>
            </div>
            <div>
              <span className="text-text-primary-gray font-poppin">
                {sold_item}
              </span>
            </div>
          </div>
          <div>
            <TooltipCustom className="text-text-primary-gray" tooltipContent={sold_item}>
              <div className={`w-[5rem] h-[5rem] rounded-full flex items-center justify-center bg-white border-[1rem] ${color} relative`}></div>
            </TooltipCustom>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCircleGraph;
