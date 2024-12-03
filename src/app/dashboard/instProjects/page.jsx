"use client";
import LatestProBox from "@/components/Home/LatestProBox";
import ProjectSkeleton from "@/components/Home/ProjectSkeleton";
import { Button, buttonVariants } from "@/components/ui/button";
import { GetProjects } from "@/store/HomeSlices/LatestProjectsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const page = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  let { projects, loading, error } = useSelector((state) => state.homeProjects);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProjects());
  }, []);
  return (
    <section className="mt-[120px] mb-10 container">
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((item, index) => {
            return <ProjectSkeleton />;
          })}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <LatestProBox project={project} index={index} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-2">
        <Link href={"/dashboard/instProjects/add"}>
          <Button className={buttonVariants({ size: "lg" })}>
            اضف مشروع جديد
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default page;
