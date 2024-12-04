"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { useState } from "react";
import { useFormik } from "formik";
import { addProject } from "@/components/validations/ValidationSchema";
import Error from "@/components/validations/Error";
import { Upload } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addInstaProFunc } from "@/store/DashboardSlices/addInstaPro";

const page = () => {
  const [imgFile, setImgFile] = useState(null);
  let { isLoading } = useSelector((state) => state.addInstaPro);
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
      number: "",
    },
    validateOnBlur: true,
    validationSchema: addProject,
    onSubmit: async (values) => {
      let data = new FormData();
      await data.append("name", values.name);
      await data.append("image", values.image);
      await data.append("description", values.description);
      await data.append("number", values.number);
      await dispatch(addInstaProFunc(data));
      formik.resetForm();
      setImgFile(null);
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImgFile(URL.createObjectURL(file));
      formik.setFieldValue("image", file);
    }
  };

  return (
    <section className="mt-[160px] mb-[50px] container">
      <MainTitle
        title="اضافة مشروع جديد"
        btnTitle=" جميع المشاريع"
        href="dashboard/instProjects"
      />
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف اسم الشخص</label>
          <div className="flex flex-col w-full">
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              className="border border-border outline-none w-full rounded-md p-2"
              placeholder="الاسم"
              type="text"
              name="name"
            />
            <Error formik={formik} nameOfField="name" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف صوره المشروع</label>
          <Error formik={formik} nameOfField="image" />

          <div className="relative size-[150px] mx-auto">
            {imgFile ? (
              <img
                src={imgFile}
                alt="Preview"
                className="w-full h-full object-fill rounded-md"
              />
            ) : (
              <div className="w-full h-full bg-primary rounded-md flex items-center mx-auto justify-center">
                <Upload size={40} className="text-white" />
              </div>
            )}
            <input
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              name="image"
              accept="image/*"
            />
          </div>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف تعليق علي المشروع</label>
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
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[180px]">اضف عدد التفاعلات</label>
          <div className="flex flex-col w-full">
            <input
              onChange={formik.handleChange}
              value={formik.values.number}
              onBlur={formik.handleBlur}
              className="border border-border outline-none w-full rounded-md p-2"
              placeholder="رقم"
              type="number"
              name="number"
            />
            <Error formik={formik} nameOfField="number" />
          </div>
        </div>
        <button
          className={`${
            isLoading ? "opacity-50 pointer-events-none" : "opacity-100"
          } mx-auto block bg-green-500 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600  py-2`}>
          {isLoading ? "جاري الاضافه" : "اضافه"}
        </button>
      </form>
    </section>
  );
};

export default page;
