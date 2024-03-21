import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  Text } from "@radix-ui/themes";
import { DropdownMenuComp } from "./dropdown-menu";

type profileDropdownProps = {
  avatarImage: string;
  avatarFallback: string;
  active?: boolean; // currently not using.
  userName?: string;
  role?: string | "Admin";
};

const ProfileDropdown = ({
  avatarImage,
  avatarFallback,
  role,
  userName,
}: profileDropdownProps) => {
  return (
    <>
      <div className="w-full h-fit relative overflow-hidden font-poppin">
        <div className="p-2 flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatarImage} />
            <AvatarFallback className="bg-indigo-500 text-white">{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Text as="p" className="text-gray-800 font-[500] font-poppin tracking-normal">
              {userName ? userName : "John Doe"}
            </Text>
            <Text as="span" className="text-xs">{role ? role : "Admin"}</Text>
          </div>
          <div>
            <DropdownMenuComp >
              <TriangleDownIcon className="w-5 h-5 text-text-primary-gray" />
            </DropdownMenuComp>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
