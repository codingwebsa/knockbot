import { NewsletterIcon } from "@/components/icons";

const Newsletter = () => {
  return (
    <button className="w-fit py-3 px-6 bg-white/5 mx-auto flex gap-2 items-center rounded border border-white/10 shadow-lg hover:bg-white/[15%] transition duration-300">
      <span>
        <NewsletterIcon size={20} />
      </span>
      {/* hidden in mobile */}
      <p className="hidden text-sm underline md:block">
        Subscribe to our newsletter to stay updated with all the newest AI
        tools.
      </p>
      {/* hidden in (md) */}
      <p className="block text-sm md:hidden">
        Subscribe to our newsletter To stay up to date.
      </p>
    </button>
  );
};

export default Newsletter;
