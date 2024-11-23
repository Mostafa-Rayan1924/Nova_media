"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const DashboardServices = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  return <div className="mt-[120px] container">DashboardServices</div>;
};

export default DashboardServices;
