"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { Button, buttonVariants } from "@/components/ui/button";
import Error from "@/components/validations/Error";
import { formAd, jobAd } from "@/components/validations/ValidationSchema";
import { useFormik } from "formik";
import { Upload } from "lucide-react";
import { useState } from "react";

const jobAds = () => {
  let [imgFile, setImgFile] = useState(null);
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
      data.append("name", values.jobTitle);
      data.append("phone", values.jobDesc);
      data.append("cv", values.JobImg);
      // await dispatch(addExhFunc(data));
      // formik.resetForm();
      //   setImgFile(null);
      console.log(values);
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
          className={` mx-auto block bg-green-500 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600  py-2`}>
          add
        </button>
      </form>
    </section>
  );
};

export default jobAds;
