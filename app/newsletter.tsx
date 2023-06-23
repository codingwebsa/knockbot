"use client";

import { AiFillCheckCircle } from "react-icons/ai";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewsletterIcon } from "@/components/icons";

const Newsletter = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="group flex w-fit items-center gap-2 rounded border border-white/10 bg-white/5 px-6 py-3 shadow-lg">
            <span>
              <NewsletterIcon size={20} />
            </span>
            {/* hidden in mobile */}
            <p className="hidden text-base underline transition-colors duration-200 group-hover:text-white/80 md:block">
              Subscribe to our newsletter to stay updated with all the newest AI
              tools.
            </p>
            {/* hidden in (md) */}
            <p className="block text-sm md:hidden">
              Subscribe to our newsletter To stay up to date.
            </p>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AiFillCheckCircle size={20} />
              <p>You are signed in to our newsletter.</p>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Newsletter;
