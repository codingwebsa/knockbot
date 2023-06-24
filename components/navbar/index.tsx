import Link from "next/link";

import Container from "../container";
import Search from "./serach";
import Menu from "./menu";

const Navbar = () => {
  return (
    <header className="sticky top-6 z-20 mt-6">
      <Container>
        <div className="flex items-center justify-between rounded-md bg-black/10 px-5 py-4 backdrop-blur-[8px]">
          <Link href="/">
            <p className="text-lg font-bold">KnockBot.</p>
          </Link>
          <nav className="flex items-center gap-2 font-medium">
            {/* hidden in mobile */}
            <div className="mr-2 hidden gap-6 md:flex">
              {/* <p>Top Picks</p> */}
              <Link href="/submit">Submit</Link>
              {/* <p>Sponsor</p> */}
            </div>
            <Search />
            {/* hidden in (md:) */}
            <Menu />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
