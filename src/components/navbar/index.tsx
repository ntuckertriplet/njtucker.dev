import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-neutral-100 w-full z-20 border-b border-gray-200">
      <div className="lg:w-1/2 flex mx-auto">
        <div
          className="items-center justify-between w-full flex md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex p-0 md:p-2 lg:pt-4 font-medium border border-gray-100 rounded-lg bg-neutral-100 md:flex-row md:space-x-8 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
