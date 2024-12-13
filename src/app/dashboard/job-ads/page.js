"use client";
import { baseUrl } from "@/components/constants/api";
import MainTitle from "@/components/reusable/MainTitle";
import { Button, buttonVariants } from "@/components/ui/button";
import Error from "@/components/validations/Error";
import { formAd, jobAd } from "@/components/validations/ValidationSchema";
import { addJobAdFunc } from "@/store/DashboardSlices/addJobAds";
import { updateJobProFunc } from "@/store/DashboardSlices/updateJob";
import axios from "axios";
import { useFormik } from "formik";
import { Loader2, Upload } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const JobAds = () => {
  let [imgFile, setImgFile] = useState(null);
  let { loading } = useSelector((state) => state.addJobAds);
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  const { Loading } = useSelector((state) => state.updateJob);
  const searchParams = useSearchParams();
  let [loadergetOne, setLoadergetOne] = useState(false);
  if (user?.userData?.role !== "ادارة") router.push("/");
  let dispatch = useDispatch();
  const id = searchParams.get("id");

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
      if (id) {
        await dispatch(updateJobProFunc({ id, data }));
      } else {
        await dispatch(addJobAdFunc(data));
      }
      formik.resetForm();
      setImgFile(null);
    },
  });
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoadergetOne(true);
        try {
          const { data } = await axios.get(
            `${baseUrl}nova/api/job/getone/${id}`
          );
          console.log(data.data.doc);
          formik.setValues({
            jobTitle: data.data.doc.title,
            jobDesc: data.data.doc.description,
            image: data.data.doc.image,
          });
          setImgFile(data.data.doc.image);
          setLoadergetOne(false);
        } catch (error) {
          console.log(error);
          setLoadergetOne(false);
        }
      };
      fetchData();
    }
  }, [id]);
  if (loadergetOne) {
    return (
      <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-black/60 z-[100]">
        <Loader2 size={50} className="text-primary animate-spin" />
      </div>
    );
  }
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
              className="border border-border resize-none h-[180px] outline-none w-full rounded-md p-2"
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
            loading || Loading
              ? "opacity-50 pointer-events-none"
              : "opacity-100"
          } mx-auto block bg-green-500 mt-10 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600  py-2`}>
          {loading || Loading ? "جاري الحفظ" : id ? "تعديل" : "إضافة"}
        </button>
      </form>
    </section>
  );
};

export default JobAds;
