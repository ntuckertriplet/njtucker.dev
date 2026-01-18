import Link from "next/link";
import NavLink from "../nav-link";

const NavBar = () => {
  return (
    <nav className="bg-neutral-100 w-full z-20 border-b border-gray-200">
      <div className="lg:w-1/2 flex mx-auto">
        <div
          className="items-center justify-between w-full flex md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex p-0 md:p-2 lg:pt-4 font-medium border border-gray-100 rounded-lg bg-neutral-100 md:flex-row md:space-x-8 md:border-0">
            <NavLink title="Home" href="/" />
            <NavLink title="Resume" href="/resume" />
            <NavLink title="Blog" href="/blog" />
            <NavLink title="Bike Visualizer" href="/bike-viz" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
