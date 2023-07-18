import Link from "next/link";
import { ReactNode } from "react";

type BlogLinkProps = {
  href: string;
  text: string;
};

const BlogLink = ({ href, text }: BlogLinkProps) => {
  return (
    <li className="text-xl hover:underline">
      <Link href={`/blog/${href}`}>{text}</Link>
    </li>
  );
};

export default BlogLink;
