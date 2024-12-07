"use client";
import MainTitle from "@/components/reusable/MainTitle";
import Error from "@/components/validations/Error";
import { siteAd } from "@/components/validations/ValidationSchema";
import { addAdFunc } from "@/store/DashboardSlices/addAd";
import { useFormik } from "formik";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SiteAd = () => {
  let [imgFile, setImgFile] = useState(null);
  let { loading } = useSelector((state) => state.addAd);
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      media: null,
    },
    validateOnBlur: true,
    validationSchema: siteAd,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("title", values.title);
      data.append("description", values.description);
      data.append("media", values.media);
      await dispatch(addAdFunc(data));
      formik.resetForm();
      setImgFile(null);
    },
  });
  return (
    <section className="mt-[160px] mb-[50px] container">
      <MainTitle
        title="اضافة اعلان للموقع"
        btnTitle=" الاعلانات"
        href="site-ads"
      />
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف عنوان للاعلان </label>
          <div className="flex flex-col w-full">
            <input
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              className="border border-border outline-none w-full rounded-md p-2"
              placeholder="العنوان"
              type="text"
              name="title"
            />
            <Error formik={formik} nameOfField="title" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف وصف الاعلان</label>
          <div className="flex flex-col w-full">
            <textarea
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
              className="border border-border resize-none h-[80px] outline-none w-full rounded-md p-2"
              placeholder="تعليق"
              name="description"
            />
            <Error formik={formik} nameOfField="description" />
          </div>
        </div>

        <div className="flex flex-col  items-start sm:flex-row sm:items-center gap-4 mb-10">
          <label className="min-w-[180px]">اضف صوره الاعلان</label>
          <Error formik={formik} nameOfField="media" />

          <div className="relative w-full  mx-auto">
            {imgFile ? (
              <img
                src={imgFile}
                alt="Preview"
                className="w-full h-[300px] object-fill rounded-md"
              />
            ) : (
              <div className="size-[150px] bg-primary rounded-md flex items-center mx-auto justify-center">
                <Upload size={40} className="text-white" />
              </div>
            )}
            <input
              onChange={(e) => {
                setImgFile(URL.createObjectURL(e.target.files[0]));
                formik.setFieldValue("media", e.target.files[0]);
              }}
              onBlur={formik.handleBlur}
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              name="media"
              accept="image/*"
            />
          </div>
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

export default SiteAd;
