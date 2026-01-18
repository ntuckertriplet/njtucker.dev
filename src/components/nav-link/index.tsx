import Link from "next/link";

type NavLinkProps = {
  title: string;
  href: string;
};

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 rounded md:bg-transparent"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
