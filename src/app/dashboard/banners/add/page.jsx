"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { addBannerFunc } from "@/store/DashboardSlices/addBanner";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AddBanner = () => {
  let [img, setImg] = useState(null);
  let [name, setName] = useState("");
  let [imgFile, setImgFile] = useState(null);
  let { loading } = useSelector((state) => state.addBanner);
  let { user } = useSelector((state) => state.login);
  let dispatch = useDispatch();
  let handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("image", imgFile);
    let headers = {
      authorization: `Bearer ${user?.token}`,
    };
    if (!imgFile || name == "") {
      toast.error("ادخل الداتا  بشكل كامل");
    } else {
      await dispatch(addBannerFunc({ formData, headers }));
      setName("");
      setImg(null);
      setImgFile(null);
    }
  };
  return (
    <section className="mt-[160px] mb-[50px] container  ">
      <div>
        <MainTitle
          title="اضافة بانر جديد"
          btnTitle=" جميع البانرات"
          href="dashboard/banners"
        />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">اضف اسم البانر</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-border outline-none focus:border-green-500 w-full  rounded-md p-2"
            type="text"
          />
        </div>
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label htmlFor="img" className="min-w-[120px]">
            اضف صوره البانر
          </label>
          {img ? (
            <label htmlFor="file" className="cursor-pointer w-full">
              <img
                src={img}
                className="w-full  h-[250px] rounded-lg object-fill"
                alt="banner"
              />
            </label>
          ) : (
            <label
              htmlFor="file"
              className={`flex items-center justify-center w-full h-12 bg-primary text-white font-medium text-sm rounded-md cursor-pointer hover:bg-primary/85 transition-all duration-300
              `}>
              <span>اختر الصوره </span>
            </label>
          )}
          <input
            id="file"
            onChange={(e) => {
              setImgFile(e.target.files[0]);
              setImg(URL.createObjectURL(e.target.files[0]));
            }}
            className="border hidden border-border  outline-none focus:border-green-500 w-full  rounded-md p-2"
            type="file"
          />
        </div>
        <button
          className={`${
            loading ? "opacity-50 pointer-events-none" : "opacity-100"
          } mx-auto block bg-green-500 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600  py-2`}>
          {loading ? "جاري الاضافه" : "اضافه"}
        </button>
      </form>
    </section>
  );
};

export default AddBanner;
