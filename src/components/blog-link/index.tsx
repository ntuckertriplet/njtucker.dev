import Link from "next/link";

type BlogLinkProps = {
  href: string;
  text: string;
};

const BlogLink = ({ href, text }: BlogLinkProps) => {
  return <Link href={`/blog/${href}`}>- {text}</Link>;
};

export default BlogLink;
