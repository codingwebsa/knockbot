"use client";

import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useDebouncedState } from "@mantine/hooks";

import Posts from "../posts";

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["title", "category"],
};

export default function Display({ data }: { data: any }) {
  const [query, setQuery] = useDebouncedState<string>("", 400);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isFirst, setIsFirst] = useState(true);

  const fuse = new Fuse(data, options);

  useEffect(() => {
    if (query && isFirst) setIsFirst(false);

    const _data = fuse.search(query);
    const slicedData = _data.slice(0, 30);

    const modified_data = slicedData.map((x: any) => ({ ...x.item }));
    setFilteredData(modified_data);
  }, [query]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          className="w-full max-w-3xl rounded border border-white/10 bg-white/10 px-6 py-4 placeholder:stroke-neutral-600"
          placeholder="Search Knockbot..."
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
      </div>
      <div className="mt-20 px-4">
        {isFirst ? (
          <Posts data={data.slice(0, 21)} />
        ) : (
          <Posts data={filteredData} />
        )}
      </div>
    </div>
  );
}
