"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { delCustomerFunc } from "@/store/DashboardSlices/removeCustomer";
import { GetCustomers } from "@/store/HomeSlices/HomeCustomersSlice";
import { Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const ClientDashboard = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  let { customers, loading } = useSelector((state) => state.homeCustomers);
  let dispatch = useDispatch();
  let [delId, setDelId] = useState(null);
  if (user?.userData?.role !== "ادارة") router.push("/");
  useEffect(() => {
    dispatch(GetCustomers());
  }, []);
  let handleDelete = async (id) => {
    let confirmDelete = window.confirm("هل أنت متأكد من الحذف ؟ ");
    if (confirmDelete) {
      setDelId(id);
      const response = await dispatch(delCustomerFunc(id));
      if (response.meta.requestStatus === "fulfilled") {
        dispatch(GetCustomers());
      }
    }
  };
  return (
    <div className="my-[120px] container">
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 mt-20 ">
        {loading &&
          [...Array(8)].map((_, index) => (
            <div
              className="size-[200px] rounded-lg bg-accent animate-pulse"
              key={index}
            />
          ))}
        {customers?.map((item) => {
          return (
            <div
              key={item._id}
              className="w-full relative h-full flex items-center border-2 border-border justify-center">
              <img
                alt={item?.name}
                className="size-[120px] object-fill  "
                decoding="async"
                src={item?.image}
              />
              <div
                onClick={() => handleDelete(item._id)}
                className="absolute top-4 hover:text-red-600 duration-300 z-10 cursor-pointer font-bold left-4 text-white bg-black/60 backdrop-blur-md  rounded-3xl py-1 px-2">
                <Trash2 className="size-4 sm:size-6" />
              </div>
              {delId == item._id && (
                <div className="absolute top-1/2 left-1/2 bg-black/50 rounded-lg grid place-items-center -translate-x-1/2 size-[80px] -translate-y-1/2">
                  <Loader2 className="size-8 animate-spin text-primary" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Link
          className="w-full mx-auto block mt-10"
          href={"/dashboard/our-clients/add"}>
          <Button className={cn(buttonVariants({ size: "lg" }), "w-[200px] ")}>
            اضف شريك
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ClientDashboard;
