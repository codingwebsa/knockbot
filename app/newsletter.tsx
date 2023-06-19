"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { AiFillCheckCircle } from "react-icons/ai";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewsletterIcon } from "@/components/icons";

const Newsletter = () => {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="flex items-center gap-2 px-6 py-3 mx-auto border rounded shadow-lg group w-fit bg-white/5 border-white/10">
            <span>
              <NewsletterIcon size={20} />
            </span>
            {/* hidden in mobile */}
            <p className="hidden text-base underline transition-colors duration-200 md:block group-hover:text-white/80">
              Subscribe to our newsletter to stay updated with all the newest AI
              tools.
            </p>
            {/* hidden in (md) */}
            <p className="block text-sm md:hidden">
              Subscribe to our newsletter To stay up to date.
            </p>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Dialog>
          <DialogTrigger>
            <button className="flex items-center gap-2 px-6 py-3 border rounded shadow-lg group w-fit bg-white/5 border-white/10">
              <span>
                <NewsletterIcon size={20} />
              </span>
              {/* hidden in mobile */}
              <p className="hidden text-base underline transition-colors duration-200 md:block group-hover:text-white/80">
                Subscribe to our newsletter to stay updated with all the newest
                AI tools.
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
      </SignedIn>
    </>
  );
};

export default Newsletter;
