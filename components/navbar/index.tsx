import Container from "../container";
import { SearchIcon } from "@/components/icons";
import Menu from "./menu";

const Navbar = () => {
  return (
    <header className="sticky z-20 mt-6 top-6">
      <Container>
        <div className="flex items-center justify-between px-5 py-4 rounded-md bg-black/10 backdrop-blur-[8px]">
          <p className="text-lg font-bold">KnockBot.</p>
          <nav className="flex items-center gap-2 font-medium">
            {/* hidden in mobile */}
            <div className="hidden gap-6 mr-2 md:flex">
              <p>Top Picks</p>
              <p>Submit</p>
              <p>Sponsor</p>
            </div>
            <div className="mr-3.5">
              <button className="border border-white/10 px-4 py-2 rounded-[4px]">
                Newsletter
              </button>
            </div>
            <span className="mr-4 md:mr-0">
              <SearchIcon size={20} />
            </span>
            {/* hidden in (md:) */}
            <Menu />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
