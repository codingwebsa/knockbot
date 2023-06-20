"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import fallbackImage from "@/public/fallback.png";
interface Props extends ImageProps {}

export default function ImageCom({ src, alt, ...props }: Props) {
  const [isError, setIsError] = useState(false);
  return (
    <Image
      src={isError ? fallbackImage : src}
      alt={alt}
      onError={() => setIsError(true)}
      {...props}
    />
  );
}
