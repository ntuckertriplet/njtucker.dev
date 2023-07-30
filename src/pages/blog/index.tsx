import BlogLink from "@/components/blog-link";

const Page = () => {
  return (
    <div className="grid place-items-center p-2 xl:p-6 xl:w-1/3">
      <div className="bg-neutral-100 w-full">
        <div className="bg-gray-300">
          <h1 className="text-4xl p-8">Blog Entries</h1>
        </div>
        <ul className="list-inside p-6">
          <li className="text-xl font-bold">
            Adventures in rocketry and building rockets
          </li>
          <ul className="list-decimal list-inside">
            <li className="p-2 hover:underline">
              <BlogLink
                href="rocketry/avionics"
                text="Building Wheatley, my custom Flight Computer"
              />
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Page;
