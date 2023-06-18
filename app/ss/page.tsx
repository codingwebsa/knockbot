"use client";

import { data } from "@/constants/demo_books";
import supabase from "@/services/supabase";
import { useState } from "react";

export default function SS() {
  const [isLoading, setIsLoading] = useState(false);
  async function Click() {
    setIsLoading(true);
    const modified_data = data.map((x) => {
      return {
        title: x.title,
        image_url: `https://webstack-screenshot-one.vercel.app?url=${x.website_url}`,
        description: x.short_description,
        short_description: x.short_description,
        website_url: x.website_url,
        pricing: x.pricing,
        category: x.label,
      };
    });

    try {
      await supabase.from("websites").insert(modified_data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <button onClick={Click}>
        {isLoading ? <span>loading...</span> : "Click me"}
      </button>
    </div>
  );
}
