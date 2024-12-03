"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const page = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  return <section className="mt-[120px] mb-10 container">instagram</section>;
};

export default page;
