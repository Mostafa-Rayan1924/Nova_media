"use client";
import Error from "@/components/validations/Error";
import { formAd } from "@/components/validations/ValidationSchema";
import { applyJobFunc } from "@/store/DashboardSlices/applyToJob";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  let dispatch = useDispatch();
  let { loading } = useSelector((state) => state.applyJob);
  const formik = useFormik({
    initialValues: {
      name: "",
      cv: null,
      phone: "",
      add: "",
      jobTitle: "",
    },
    validateOnBlur: true,
    validationSchema: formAd,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("username", values.name);
      data.append("phone", values.phone);
      data.append("location", values.add);
      data.append("jobTitle", values.jobTitle);
      data.append("file", values.cv);
      await dispatch(applyJobFunc(data));
      formik.resetForm();
      formik.setFieldValue("cv", null);
    },
  });
  return (
    <div className="my-[140px] container">
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <h2 className="text-center mb-10 text-3xl font-bold">ادخل بياناتك</h2>
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">الاسم بالكامل</label>
          <div className="w-full">
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="اسمك"
              name="name"
              className="border border-border outline-none mb-1 text-sm  w-full  rounded-md p-3"
            />
            <Error formik={formik} nameOfField="name" />
          </div>
        </div>
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]"> المسمي الوظيفي</label>
          <div className="w-full">
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.jobTitle}
              onBlur={formik.handleBlur}
              placeholder="المسمي الوظيفي"
              name="jobTitle"
              className="border border-border outline-none mb-1 text-sm  w-full  rounded-md p-3"
            />
            <Error formik={formik} nameOfField="jobTitle" />
          </div>
        </div>
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">رقم الهاتف</label>
          <div className="w-full">
            <input
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              className="border border-border mb-1 outline-none text-sm  w-full  rounded-md p-3"
              type="text"
              placeholder="يفضل يكون متاح به واتساب"
              name="phone"
            />
            <Error formik={formik} nameOfField="phone" />
          </div>
        </div>

        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">العنوان</label>
          <div className="w-full">
            <input
              onChange={formik.handleChange}
              value={formik.values.add}
              onBlur={formik.handleBlur}
              className="border border-border mb-1 outline-none text-sm  w-full  rounded-md p-3"
              type="text"
              placeholder="العنوان بالكامل"
              name="add"
            />
            <Error formik={formik} nameOfField="add" />
          </div>
        </div>

        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">ارفق cv</label>
          <div className="w-full">
            <input
              onChange={(e) => formik.setFieldValue("cv", e.target.files[0])}
              onBlur={formik.handleBlur}
              className="border border-border mb-1 outline-none text-sm  w-full  rounded-md p-2"
              type="file"
              name="cv"
            />
            <h2 className="text-sm  block mx-auto font-bold w-fit p-1 text-center bg-accent text-foreground">
              يفضل ان يكون الملف pdf
            </h2>
            <Error formik={formik} nameOfField="cv" />
          </div>
        </div>

        <button
          className={`${
            loading ? "opacity-50 pointer-events-none" : "opacity-100"
          } mx-auto block bg-primary text-white rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-primary/90  py-2`}>
          {loading ? "جاري الارسال" : "ارسال"}
        </button>
      </form>
    </div>
  );
};
export default Form;
