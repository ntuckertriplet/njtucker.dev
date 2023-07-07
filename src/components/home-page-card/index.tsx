import Link from "next/link";

type HomePageCardProps = {
  title: string;
  content: string;
  link: string;
};

const HomePageCard = ({ title, content, link }: HomePageCardProps) => {
  return (
    <Link href={`/blog/${link}`}>
      <div className="flex flex-col rounded-lg shadow-md w-80 m-6 overflow-hidden bg-no-repeat bg-cover bg-center">
        <h5 className="mb-2 text-xl font-medium leading-tight p-4 m-2 text-center">
          {title}
        </h5>
        <p className="mb-4 p-4 text-center">{content}</p>
      </div>
    </Link>
  );
};

export default HomePageCard;
