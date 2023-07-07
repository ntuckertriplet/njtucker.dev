import Link from "next/link";

type BlogLandingCardProps = {
  title: string;
  content: string;
  link: string;
};

const BlogLandingCard = ({ title, content, link }: BlogLandingCardProps) => {
  return (
    <Link href={`/blog/${link}`}>
      <div className="flex flex-col bg-neutral-100 hover:bg-slate-200 rounded-lg shadow-md m-6 overflow-hidden">
        <h5 className="mb-2 text-xl font-medium leading-tight p-4 m-2 text-center">
          {title}
        </h5>
        <p className="mb-4 p-4 text-center">{content}</p>
      </div>
    </Link>
  );
};

export default BlogLandingCard;
