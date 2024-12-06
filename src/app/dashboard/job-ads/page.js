"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { Button, buttonVariants } from "@/components/ui/button";
import Error from "@/components/validations/Error";
import { formAd, jobAd } from "@/components/validations/ValidationSchema";
import { addJobAdFunc } from "@/store/DashboardSlices/addJobAds";
import { useFormik } from "formik";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const JobAds = () => {
  let [imgFile, setImgFile] = useState(null);
  let { loading } = useSelector((state) => state.addJobAds);
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobDesc: "",
      JobImg: null,
    },
    validateOnBlur: true,
    validationSchema: jobAd,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("title", values.jobTitle);
      data.append("description", values.jobDesc);
      data.append("image", values.JobImg);
      await dispatch(addJobAdFunc(data));
      formik.resetForm();
      setImgFile(null);
    },
  });
  return (
    <section className="mt-[160px] mb-[50px] container">
      <MainTitle
        title="اضافة اعلان توظيف"
        btnTitle=" الاعلانات"
        href="job-ads"
      />
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف المسمي الوظيفي</label>
          <div className="flex flex-col w-full">
            <input
              onChange={formik.handleChange}
              value={formik.values.jobTitle}
              onBlur={formik.handleBlur}
              className="border border-border outline-none w-full rounded-md p-2"
              placeholder="المسمي الوظيفي"
              type="text"
              name="jobTitle"
            />
            <Error formik={formik} nameOfField="jobTitle" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف وصف الاعلان</label>
          <div className="flex flex-col w-full">
            <textarea
              onChange={formik.handleChange}
              value={formik.values.jobDesc}
              onBlur={formik.handleBlur}
              className="border border-border resize-none h-[80px] outline-none w-full rounded-md p-2"
              placeholder="تعليق"
              name="jobDesc"
            />
            <Error formik={formik} nameOfField="jobDesc" />
          </div>
        </div>

        <div className="flex flex-col  items-start sm:flex-row sm:items-center gap-4 mb-10">
          <label className="min-w-[180px]">اضف صوره الاعلان</label>
          <Error formik={formik} nameOfField="JobImg" />

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
                formik.setFieldValue("JobImg", e.target.files[0]);
              }}
              onBlur={formik.handleBlur}
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              name="JobImg"
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

export default JobAds;
