import { NewsletterIcon } from "@/components/icons";

const Newsletter = () => {
  return (
    <button className="w-fit py-3 px-6 bg-white/5 mx-auto flex gap-2 items-center rounded border border-white/10 text-sm shadow-lg hover:bg-white/[15%] transition duration-300">
      <span>
        <NewsletterIcon size={20} />
      </span>
      <p className="underline">
        Subscribe to our newsletter to stay updated with all the newest AI
        tools.
      </p>
    </button>
  );
};

export default Newsletter;
