"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addTeam } from "@/components/validations/ValidationSchema";
import Error from "@/components/validations/Error";
import { Loader2, Upload } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTeamProFunc } from "@/store/DashboardSlices/addTeam";
import { useRouter, useSearchParams } from "next/navigation";
import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import { updateTeamProFunc } from "@/store/DashboardSlices/updateTeam";
const page = () => {
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoading } = useSelector((state) => state.addTeam);
  const { Loading } = useSelector((state) => state.updateTeam);
  let [loadergetOne, setLoadergetOne] = useState(false);
  const { user } = useSelector((state) => state.login);
  // إذا لم يكن المستخدم إدارياً، أعد توجيهه
  useEffect(() => {
    if (user?.userData?.role !== "ادارة") router.push("/");
  }, [user, router]);

  const id = searchParams.get("id");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      qualification: "",
      department: "",
      image: "",
    },
    validationSchema: addTeam,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("name", values.name);
      data.append("image", values.image);
      data.append("email", values.email);
      data.append("phone", values.phone);
      data.append("qualification", values.qualification);
      data.append("department", values.department);
      if (id) {
        await dispatch(updateTeamProFunc({ id, data }));
      } else {
        await dispatch(addTeamProFunc(data));
      }
      formik.resetForm();
      setImgFile(null);
    },
  });

  // تحميل بيانات العنصر عند التعديل
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoadergetOne(true);
        try {
          const { data } = await axios.get(
            `${baseUrl}nova/api/team/getone/${id}`
          );
          console.log(data.data.doc);
          formik.setValues({
            name: data.data.doc.name,
            email: data.data.doc.email,
            phone: data.data.doc.phone,
            qualification: data.data.doc.qualification,
            department: data.data.doc.department,
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImgFile(URL.createObjectURL(file));
      formik.setFieldValue("image", file);
    }
  };
  if (loadergetOne) {
    return (
      <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-black/60 z-[100]">
        <Loader2 size={50} className="text-primary animate-spin" />
      </div>
    );
  }
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
            isLoading || Loading
              ? "opacity-50 pointer-events-none"
              : "opacity-100"
          } mx-auto block bg-green-500 mt-10 text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600  py-2`}>
          {isLoading || Loading ? "جاري الحفظ" : id ? "تعديل" : "إضافة"}
        </button>
      </form>
    </section>
  );
};

export default page;
