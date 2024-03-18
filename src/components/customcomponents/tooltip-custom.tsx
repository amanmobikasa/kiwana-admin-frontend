
import { Tooltip } from "@radix-ui/themes";
import { ReactNode } from "react";


// insert the tooltip props here
type TooltipProps = {
    children : JSX.Element | JSX.Element[],
    tooltipContent? :  string | NonNullable<ReactNode> ,
    className? : string
}

export const TooltipCustom = ({children,tooltipContent, className} : TooltipProps) => {
  return (
    <>
      <Tooltip content={tooltipContent ? tooltipContent : "passing value"} className={className}>
        {children}
      </Tooltip>
    </>
  );
};
