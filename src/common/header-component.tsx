import { TooltipCustom } from "@/components/customcomponents/tooltip-custom";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, BellIcon } from "@radix-ui/react-icons";
import ProfileDropdown from "./profile-dropdown";
import avatar from '@/assets/avatar.png'

type HeaderProps = {

};

export const HeaderComponent = ({  } : HeaderProps) => {
  return (
    <>
      <div className="flex justify-start items-center gap-x-[4rem] w-full font-poppin">
        <div className="w-8/12 relative ">
          <Input
            placeholder="Search..."
            className="w-full rounded-xl border-2 border-gray-300 bg-white placeholder:text-text-primary-gray"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-text-primary-gray mr-5" />
          </div>
        </div>
        <TooltipCustom tooltipContent={"New Notification"}>
          <div className="relative h-10 w-10 active:bg-gray-200 flex justify-center items-center rounded-full">
            <BellIcon className="h-7 w-7 text-text-primary-gray" />
            <div className="absolute h-5 w-5  -inset-y-0 inset-x-4 right-0 flex items-center justify-center bg-indigo-500 text-white text-[0.50rem] rounded-full">
              <span>5</span>
            </div>
          </div>
        </TooltipCustom>
        <div className="w-2/12">
            <ProfileDropdown avatarImage={avatar} avatarFallback="JD" />
        </div>
      </div>
    </>
  );
};
