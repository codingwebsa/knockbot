import { LongRightArrowIcon } from "@/components/icons";
import Newsletter from "./newsletter";

const HeroSection = () => {
  return (
    <div className="w-full mt-[130px]">
      {/* top */}
      <div className="flex justify-center mb-4">
        <button className="text-xs rounded-full flex items-center gap-2.5 transition duration-300 bg-white/10 pl-2.5 pr-1.5 group hover:bg-white/20 backdrop-blur-sm py-0.5">
          <p>Explore new AI tools</p>
          <span className="bg-white/5 px-1.5 py-0 rounded-full group-hover:bg-white/10">
            <LongRightArrowIcon size={14} />
          </span>
        </button>
      </div>
      {/* hero-text */}
      <div>
        <h1 className="text-gradient text-center text-7xl font-bold capitalize">
          The whole new Era of AI <br /> powered life.
        </h1>
      </div>
      {/* newsletter */}
      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default HeroSection;
