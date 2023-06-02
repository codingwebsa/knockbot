import Container from "./container";
import { SearchIcon } from "@/components/icons";

const Navbar = () => {
  return (
    <header className="mt-6">
      <Container>
        <div className="flex justify-between items-center bg-black/10 py-4 px-5 rounded-md backdrop-blur-xl">
          <p className="text-lg font-bold">KnockBot.</p>
          <nav className="flex gap-2 items-center font-medium">
            <div className="flex gap-6 mr-2">
              <p>Top Picks</p>
              <p>Submit</p>
              <p>Sponsor</p>
            </div>
            <div className="mr-3.5">
              <button className="border border-white/10 px-4 py-2 rounded-[4px]">
                Newsletter
              </button>
            </div>
            <span>
              <SearchIcon size={20} />
            </span>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
