"use client";

import { FiExternalLink } from "react-icons/fi";
import { TwitterShareButton } from "react-share";

interface Props {
  url: string;
  title: string;
}

export default function ShareButton({ url, title }: Props) {
  return (
    <>
      <div>
        <TwitterShareButton url={url} title={title} resetButtonStyle>
          <span className="flex items-center gap-2 px-5 py-2 font-semibold text-white bg-transparent border rounded-md border-white/40">
            <p>Share on twitter</p>
            <span>
              <FiExternalLink size={16} />
            </span>
          </span>
        </TwitterShareButton>
      </div>
    </>
  );
}
