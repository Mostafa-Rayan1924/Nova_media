"use client";
import { baseUrl } from "@/components/constants/api";
import MainTitle from "@/components/reusable/MainTitle";
import Error from "@/components/validations/Error";
import { siteAd } from "@/components/validations/ValidationSchema";
import { addAdFunc } from "@/store/DashboardSlices/addAd";
import { updatedSiteAdProFunc } from "@/store/DashboardSlices/updatedSiteAd";
import axios from "axios";
import { useFormik } from "formik";
import { Loader2, Upload } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SiteAd = () => {
  let [imgFile, setImgFile] = useState(null);
  let { loading } = useSelector((state) => state.addAd);
  let { Loading } = useSelector((state) => state.updatedAd);
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  const searchParams = useSearchParams();
  let [loadergetOne, setLoadergetOne] = useState(false);
  if (user?.userData?.role !== "ادارة") router.push("/");
  const id = searchParams.get("id");

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
      if (id) {
        await dispatch(updatedSiteAdProFunc({ id, data }));
      } else {
        await dispatch(addAdFunc(data));
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
            `${baseUrl}nova/api/ad/getone/${id}`
          );
          console.log(data.data.doc);
          formik.setValues({
            title: data.data.doc.title,
            description: data.data.doc.description,
            media: data.data.doc.media,
          });
          setImgFile(data.data.doc.media);
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

export default SiteAd;
