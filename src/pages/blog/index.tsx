import { getBlogMetadata } from "@/lib/blog";

const Page = () => {
  const blogs = getBlogMetadata();
  return (
    <div className="grid place-items-center p-10 w-1/2">
      <div className="bg-neutral-100 w-full">
        <div className="bg-slate-200">
          <h1 className="text-5xl p-10">Blog Entries</h1>
        </div>
        <ul className="list-disc list-inside p-10">
          <li className="text-xl">Hello World</li>
          <ul className="list-decimal list-inside">
            <li className="mt-4 ml-4">Entry 1</li>
            <li className="ml-4">Entry 2</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Page;
