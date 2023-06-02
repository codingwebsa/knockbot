"use client";

import { MenuIcon } from "../icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="relative block md:hidden">
          <MenuIcon size={20} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button className="text-lg">Top Picks</button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="text-lg">Submit</button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="text-lg">Sponsor</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
