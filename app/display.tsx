"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import Posts from "./posts";
import { getUniqueArray } from "@/lib/utils";

const Display = ({ data }: { data: any }) => {
  const [active, setActive] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const _arr = data.map((x: any) => {
    return x.category;
  });
  const categories = getUniqueArray(_arr).slice(0, 30);

  // runs every time the active state changes
  useEffect(() => {
    if (active == "") return setFilteredData(data.slice(0, 70));

    setFilteredData(data.filter((x: any) => x.category === active));
  }, [active, data]);

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center gap-3">
          {/* all tools */}
          <button
            className={clsx(
              "rounded-lg border border-white/10 px-3 py-2 shadow-lg transition duration-200 hover:bg-white/[5%]",
              {
                "bg-white/10": active == "",
              }
            )}
            onClick={() => setActive("")}
          >
            <p className="text-base font-medium capitalize lg:text-lg">
              All Tools
            </p>
          </button>
          {categories?.map((x: string, i: number) => (
            <button
              className={clsx(
                "rounded-lg border border-white/10 px-3 py-2 shadow-lg transition duration-200 hover:bg-white/[5%]",
                {
                  "bg-white/10": active == x,
                }
              )}
              onClick={() => setActive(x)}
              key={i}
            >
              <p className="text-base font-medium capitalize lg:text-lg">{x}</p>
            </button>
          ))}
        </div>
        <section className="mt-20">
          <Posts data={filteredData} />
        </section>
      </section>
    </>
  );
};

export default Display;
