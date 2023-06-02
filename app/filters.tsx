"use client";

import clsx from "clsx";
import { useState } from "react";

const Filters = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-3">
        {arr.map((x, i) => (
          <button
            className={clsx(
              "px-3 py-2 transition shadow-lg duration-200 border rounded-lg border-white/10 hover:bg-white/[5%]",
              {
                "bg-white/10": active == i,
              }
            )}
            onClick={() => setActive(i)}
            aria-label={x.name}
            key={i}
          >
            <p className="text-base font-medium capitalize lg:text-lg">
              {x.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Filters;

const arr: { name: string }[] = [
  {
    name: "view all",
  },
  {
    name: "Free",
  },
  {
    name: "Recently added tools",
  },
  {
    name: "avatar creation",
  },
  {
    name: "social media",
  },
  {
    name: "video editing",
  },
  {
    name: "speech generation",
  },
  {
    name: "AI detectors",
  },
  {
    name: "Teachers",
  },
  {
    name: "students",
  },
  {
    name: "chatbots",
  },
  {
    name: "writings",
  },
  {
    name: "marketing",
  },
  {
    name: "coding",
  },
  {
    name: "finance",
  },
  {
    name: "data",
  },
  {
    name: "fun",
  },
  {
    name: "inspiration",
  },
  {
    name: "generative art",
  },
  {
    name: "video creation",
  },
  {
    name: "music",
  },
  {
    name: "prompting",
  },
  {
    name: "productivity",
  },
  {
    name: "business",
  },
  {
    name: "self employment",
  },
  {
    name: "tool database",
  },
  {
    name: "ai communities",
  },
];
