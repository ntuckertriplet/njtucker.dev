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
          <ul className="list-inside">
            <li className="mt-2 hover:underline">
              <BlogLink
                href="rocketry/avionics/wheatley"
                text="Building Wheatley, my custom Flight Computer hardware"
              />
            </li>
            <li className="mt-2 hover:underline">
              <BlogLink
                href="rocketry/avionics/matchbox"
                text="Matchbox, a remote rocket igniter and launch stand"
              />
            </li>
          </ul>
          <li className="mt-2 text-xl font-bold">
            SysAdmin, On-Prem and in the Cloud
          </li>
          <ul className="list-inside">
            <li className="mt-2 hover:underline">
              <BlogLink
                href="homelab/amateur-datacenter"
                text="A short intro to my homelab"
              />
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Page;
