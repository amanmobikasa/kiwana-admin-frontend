import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { ComponentProps } from "react";
import React from "react";

interface ModalWrapperProps extends ComponentProps<typeof AlertDialogAction> {
  children?: React.ReactNode;
  title : string,
  btnTitle : string | React.ReactNode | React.ReactNode[],
  description : string | React.ReactNode | React.ReactNode[],
}

export const ModalWrapper = ({children, description, title, btnTitle, ref, ...props} : ModalWrapperProps) => {
  return (
    <>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent className="bg-white font-poppin rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="text-text-primary-gray font-[400] font-poppin text-sm">{description}</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {children}
          </AlertDialogFooter>
        </AlertDialogContent>
    </>
  );
};
