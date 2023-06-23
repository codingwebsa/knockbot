"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import fallbackImage from "@/public/fallback.png";
import { cn } from "@/lib/utils";
interface Props extends ImageProps {}

export default function ImageCom({ src, alt, ...props }: Props) {
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <Image
      src={isError ? fallbackImage : src}
      alt={alt}
      className={cn(
        "duration-700 ease-in-out hover:opacity-70",
        loading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
      onError={() => setIsError(true)}
      {...props}
    />
  );
}
