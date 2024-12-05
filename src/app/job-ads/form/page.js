"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Error from "@/components/validations/Error";
import { formAd } from "@/components/validations/ValidationSchema";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      cv: null,
      phone: "",
      add: "",
    },
    validateOnBlur: true,
    validationSchema: formAd,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("name", values.name);
      data.append("phone", values.phone);
      data.append("add", values.add);
      data.append("cv", values.cv);
      // await dispatch(addExhFunc(data));
      // formik.resetForm();
      console.log(values);
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
            <Error formik={formik} nameOfField="cv" />
          </div>
        </div>

        <div className="grid place-items-center">
          <Button className={buttonVariants({ size: "lg" })}>ارسال</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
