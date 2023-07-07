import { getPostData } from "@/lib/posts";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const postData = getPostData(typeof slug === "string" ? slug : "default");

  return { slug };
};

export default Page;
