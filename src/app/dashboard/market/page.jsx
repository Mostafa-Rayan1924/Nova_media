"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const MarketDashboard = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  useEffect(() => {
    if (user?.userData?.role !== "ادارة") {
      router.replace("/");
    }
  }, [user, router]);
  return <div className="mt-[120px] container">MarketDashboard</div>;
};

export default MarketDashboard;
