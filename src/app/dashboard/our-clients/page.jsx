"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ClientDashboard = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  return <div className="mt-[120px] container">ClientDashboard</div>;
};

export default ClientDashboard;
