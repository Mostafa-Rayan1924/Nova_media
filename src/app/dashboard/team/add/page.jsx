"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { useState } from "react";
import { useFormik } from "formik";
import { addProject, addTeam } from "@/components/validations/ValidationSchema";
import Error from "@/components/validations/Error";
import { Upload } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addInstaProFunc } from "@/store/DashboardSlices/addInstaPro";
import { addTeamProFunc } from "@/store/DashboardSlices/addTeam";
import { useRouter } from "next/navigation";
const page = () => {
  const [imgFile, setImgFile] = useState(null);
  let { isLoading } = useSelector((state) => state.addTeam);
  let dispatch = useDispatch();
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  if (user?.userData?.role !== "ادارة") router.push("/");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      qualification: "",
      department: "",
      image: "",
    },
    validateOnBlur: true,
    validationSchema: addTeam,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("name", values.name);
      data.append("image", values.image);
      data.append("email", values.email);
      data.append("phone", values.phone);
      data.append("qualification", values.qualification);
      data.append("department", values.department);
      await dispatch(addTeamProFunc(data));
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
    <section className="mt-[160px] mb-[50px] container  ">
      <MainTitle
        title="اضافة الي الفريق"
        btnTitle=" جميع الفريق"
        href="dashboard/team"
      />
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-2">
          <label className="min-w-[180px]">اضف اسم الشخص</label>
          <input
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder="الاسم"
            className="border border-border outline-none  w-full  rounded-md p-2"
            type="text"
          />
        </div>
        <Error formik={formik} nameOfField="name" />
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-2">
          <label className="min-w-[180px]">اضف ايميل الشخص</label>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="الايميل"
            className="border border-border outline-none  w-full  rounded-md p-2"
            type="text"
          />
        </div>
        <Error formik={formik} nameOfField="email" />

        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-2">
          <label className="min-w-[180px]">اضف مؤهل الشخص</label>
          <input
            name="qualification"
            onChange={formik.handleChange}
            value={formik.values.qualification}
            onBlur={formik.handleBlur}
            placeholder="المؤهل"
            className="border border-border outline-none  w-full  rounded-md p-2"
            type="text"
          />
        </div>
        <Error formik={formik} nameOfField="qualification" />

        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-2">
          <label className="min-w-[180px]">اضف رقم الشخص</label>
          <input
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            maxLength={11}
            placeholder="رقم الواتس"
            className="border border-border outline-none  w-full  rounded-md p-2"
            type="text"
          />
        </div>
        <Error formik={formik} nameOfField="phone" />

        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-2">
          <label className="min-w-[180px]">اضف دور الشخص</label>
          <select
            name="department"
            onChange={formik.handleChange}
            value={formik.values.department}
            onBlur={formik.handleBlur}
            className="border border-border outline-none text-muted-foreground w-full  rounded-md p-2">
            <option className="hidden">اضف الدور</option>
            <option>قسم الديجيتال و السبليميشن</option>
            <option>قسم الأوت دور و الإن دور</option>
            <option>قسم الليزر و الفايبر</option>
            <option>قسم الحسابات والمتابعة</option>
            <option>التسويق الالكتروني</option>
          </select>
        </div>
        <Error formik={formik} nameOfField="department" />

        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-2">
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

        <button
          className={`${
            isLoading ? "opacity-50 pointer-events-none" : "opacity-100"
          } mx-auto block bg-green-500 mt-10 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600  py-2`}>
          {isLoading ? "جاري الاضافه" : "اضافه"}
        </button>
      </form>
    </section>
  );
};

export default page;
