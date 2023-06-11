"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import Posts from "./posts";

const Display = ({ data }: { data: any }) => {
  const [active, setActive] = useState("all-tools");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (active == "all-tools") return setFilteredData(data);

    setFilteredData(data.filter((x: any) => x.category === active));
  }, [active]);

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((x, i) => (
            <button
              className={clsx(
                "px-3 py-2 transition shadow-lg duration-200 border rounded-lg border-white/10 hover:bg-white/[5%]",
                {
                  "bg-white/10": active == x.value,
                }
              )}
              onClick={() => setActive(x.value)}
              aria-label={x.label}
              key={i}
            >
              <p className="text-base font-medium capitalize lg:text-lg">
                {x.label}
              </p>
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

const categories = [
  {
    value: "all-tools",
    label: "All tools",
  },
  {
    value: "avatar-creation",
    label: "Avatar-Creation",
  },
  {
    value: "social-media",
    label: "Social-Media",
  },
  {
    value: "video-editing",
    label: "Video-Editing",
  },
  {
    value: "speech-generation",
    label: "Speech-Generation",
  },
  {
    value: "ai-detectors",
    label: "AI-Detectors",
  },
  {
    value: "teachers",
    label: "Teachers",
  },
  {
    value: "students",
    label: "Students",
  },
  {
    value: "chatbots",
    label: "Chatbots",
  },
  {
    value: "writing",
    label: "Writing",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "coding",
    label: "Coding",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "fun",
    label: "Fun",
  },
  {
    value: "inspiration",
    label: "Inspiration",
  },
  {
    value: "generative-art",
    label: "Generative-Art",
  },
  {
    value: "video-creation",
    label: "Video-Creation",
  },
  {
    value: "music",
    label: "Music",
  },
  {
    value: "prompting",
    label: "Prompting",
  },
  {
    value: "productivity",
    label: "Productivity",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "self-improvement",
    label: "Self-Improvement",
  },
  {
    value: "tool-databases",
    label: "Tool-Databases",
  },
  {
    value: "ai-communities",
    label: "AI-Communities",
  },
  {
    value: "others",
    label: "Others",
  },
];
