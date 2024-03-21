import React from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface SideBarSliderProps {
  children?: React.ReactNode;
}

export const SideBarSlider = ({children} : SideBarSliderProps) => {
  return (
    <>
          <SheetContent className="bg-bg-primary-bg-gray font-poppin">
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                {children}
              </SheetDescription>
            </SheetHeader> */}
            {children}
          </SheetContent>
      
    </>
  );
};
