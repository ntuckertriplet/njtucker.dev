import BlogLandingCard from "@/components/blog-landing-card";
import { getBlogMetadata } from "@/lib/blog";

const Page = () => {
  const blogs = getBlogMetadata();
  return (
    <div>
      <h1 className="p-6 m-6 text-5xl">Blog Post Entries</h1>
      <div className="justify-items-center">
        {blogs.map((b) => {
          return (
            <BlogLandingCard
              key={b.title}
              title={b.title}
              content={b.content}
              link={b.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
