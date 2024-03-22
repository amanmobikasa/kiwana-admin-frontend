import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { ComponentProps } from "react";

interface SideBarSliderProps extends ComponentProps<typeof SheetContent> {
  children?: React.ReactNode | React.ReactNode[];
}

export const SideBarSlider = ({
  children,
  ref,
  ...props
}: SideBarSliderProps) => {
  return (
    <>
      {/* <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet> */}

      <SheetContent ref={ref} {...props} >
      {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                {children}
              </SheetDescription>
            </SheetHeader> */}
      {/* {children} */}
      </SheetContent>
    </>
  );
};
