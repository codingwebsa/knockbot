import { NewsletterIcon } from "@/components/icons";

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
