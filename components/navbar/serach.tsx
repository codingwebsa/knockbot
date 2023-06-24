import Link from "next/link";

import { SearchIcon } from "@/components/icons";

export default function Search() {
  return (
    <div>
      <Link href="/search" className="relative flex cursor-pointer">
        <input
          type="text"
          className="cursor-pointer rounded-md bg-white/5 px-4 py-2"
          placeholder="Search..."
        />
        <span className="absolute right-0 flex h-full items-center justify-center px-3">
          <SearchIcon size={18} />
        </span>
      </Link>
    </div>
  );
}
