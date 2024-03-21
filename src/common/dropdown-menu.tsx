import { DropdownMenu } from "@radix-ui/themes";
import React from "react";

type DropdownMenuProps = {
    children ?: React.ReactNode
    dropdownContent ?: object[]
};

export const DropdownMenuComp = ({children, dropdownContent} : DropdownMenuProps) => {

    const [dropdownContentState, setDropdownContentState] = React.useState(dropdownContent);

  return (
    <>
    <div className="overflow-auto">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {children}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="font-poppin">
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      </div>
    </>
  );
};


