import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>{slug}</p>;
};

export default Page;
