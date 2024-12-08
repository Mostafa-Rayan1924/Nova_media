"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { addBannerFunc } from "@/store/DashboardSlices/addBanner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AddBanner = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  let [file, setFile] = useState(null); // Unified for both image and video
  let [name, setName] = useState("");
  let [fileUrl, setFileUrl] = useState(null);
  let { loading } = useSelector((state) => state.addBanner);

  let dispatch = useDispatch();
  let handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);
    let headers = {
      authorization: `Bearer ${user?.token}`,
    };
    if (!file || name === "") {
      toast.error("ادخل الداتا بشكل كامل");
    } else {
      await dispatch(addBannerFunc({ formData, headers }));
      setName("");
      setFile(null);
      setFileUrl(null);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setFileUrl(URL.createObjectURL(uploadedFile));
  };

  return (
    <section className="mt-[160px] mb-[50px] container">
      <div>
        <MainTitle
          title="اضافة بانر جديد"
          btnTitle=" جميع البانرات"
          href="dashboard/banners"
        />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">اضف اسم البانر</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-border outline-none focus:border-green-500 w-full rounded-md p-2"
            type="text"
          />
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label htmlFor="file" className="min-w-[120px]">
            اضف ملف البانر
          </label>
          {fileUrl ? (
            file?.type.startsWith("image/") ? (
              <label htmlFor="file" className="cursor-pointer w-full">
                <img
                  src={fileUrl}
                  className="w-full h-[250px] rounded-lg object-fill"
                  alt="banner"
                />
              </label>
            ) : file?.type.startsWith("video/") ? (
              <label htmlFor="file" className="cursor-pointer w-full">
                <video
                  src={fileUrl}
                  className="w-full h-[250px] rounded-lg"
                  controls
                />
              </label>
            ) : null
          ) : (
            <label
              htmlFor="file"
              className={`flex items-center justify-center w-full h-12 bg-primary text-white font-medium text-sm rounded-md cursor-pointer hover:bg-primary/85 transition-all duration-300`}>
              <span>اختر الملف</span>
            </label>
          )}
          <input
            id="file"
            onChange={handleFileChange}
            className="hidden"
            type="file"
          />
        </div>
        <button
          className={`${
            loading ? "opacity-50 pointer-events-none" : "opacity-100"
          } mx-auto block bg-green-500 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600 py-2`}>
          {loading ? "جاري الاضافه" : "اضافه"}
        </button>
      </form>
    </section>
  );
};

export default AddBanner;
