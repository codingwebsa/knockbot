"use client";

import Link from "next/link";
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
      <DropdownMenuTrigger
        aria-label="Menu"
        className="relative block md:hidden"
      >
        <MenuIcon size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button className="text-lg">Top Picks</button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/submit" className="text-lg">
            Submit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="text-lg">Sponsor</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
