import BlogLink from "@/components/blog-link";

const Page = () => {
  return (
    <div className="grid place-items-center p-6 w-1/3">
      <div className="bg-neutral-100 w-full">
        <div className="bg-gray-300">
          <h1 className="text-4xl p-8">Blog Entries</h1>
        </div>
        <ul className="list-disc list-inside p-6 space-y-2">
          <BlogLink
            href="/ground-station"
            text="Building a custom Ground Station in Pygame"
          />
          <BlogLink
            href="/signal-processing"
            text="Learning about and writing code for state design and signal processing"
          />
          <BlogLink
            href="/rocketry"
            text="Adventures in rocketry and building rockets"
          />
        </ul>
      </div>
    </div>
  );
};

export default Page;
