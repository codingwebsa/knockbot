"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import Posts from "./posts";
import { getUniqueArray } from "@/lib/utils";

const Display = ({ data }: { data: any }) => {
  const [active, setActive] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);

  // only runs once the page load
  useEffect(() => {
    const _arr = data.map((x: any) => {
      return x.category;
    });

    setCategories(getUniqueArray(_arr).slice(0, 30));
  }, []);

  // runs every time the active state changes
  useEffect(() => {
    if (active == "") return setFilteredData(data);

    setFilteredData(data.filter((x: any) => x.category === active));
  }, [active, data]);

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center gap-3">
          {/* all tools */}
          <button
            className={clsx(
              "px-3 py-2 transition shadow-lg duration-200 border rounded-lg border-white/10 hover:bg-white/[5%]",
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
                "px-3 py-2 transition shadow-lg duration-200 border rounded-lg border-white/10 hover:bg-white/[5%]",
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
