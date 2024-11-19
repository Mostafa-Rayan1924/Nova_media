"use client";
import Error from "@/components/validations/Error";
import { signUpSchema } from "@/components/validations/ValidationSchema";
import { signupFunc } from "@/store/AuthSlices/signupSlice";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  let { user, loading, error } = useSelector((state) => state.signUp);
  let dispatch = useDispatch();
  let router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      location: "",
      phone: "",
      role: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      let params = {
        username: values.username,
        email: values.email,
        location: values.location,
        phone: values.phone,
        role: values.role,
        password: values.password,
      };

      dispatch(signupFunc(params));
      // formik.resetForm();
    },
  });
  return (
    <section className="relative flex flex-wrap mt-[120px] sm:mt-[80px] lg:mt-0 lg:h-screen lg:items-center">
      <div className="w-full px-4 py-6 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            قم بالتسجيل معنا
          </h2>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-3">
          {/* الاسم */}
          <div>
            <label htmlFor="username" className="sr-only">
              الاسم بالكامل
            </label>

            <div className="relative">
              <input
                type="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}
                className="w-full rounded-lg border-border border focus:border-green-500 transition-all duration-200 outline-none p-3 pe-12 text-sm shadow-sm"
                placeholder="ادخل الاسم بالكامل"
              />
              <Error formik={formik} nameOfField={"username"} />
            </div>
          </div>
          {/* الايميل */}
          <div>
            <label htmlFor="email" className="sr-only">
              الايميل
            </label>

            <div className="relative">
              <input
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name="email"
                className="w-full rounded-lg border-border border focus:border-green-500 transition-all duration-200 outline-none p-3 pe-12 text-sm shadow-sm"
                placeholder="ادخل الايميل"
              />
              <Error formik={formik} nameOfField={"email"} />
            </div>
          </div>
          {/* كلمة السر */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                className="w-full rounded-lg border-border border focus:border-green-500 transition-all duration-200 outline-none p-3 pe-12 text-sm shadow-sm"
                placeholder="ادخل كلمة السر"
              />
              <Error formik={formik} nameOfField={"password"} />
            </div>
          </div>
          {/* الهاتف */}
          <div>
            <label htmlFor="phone" className="sr-only">
              رقم الواتساب
            </label>

            <div className="relative">
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                name="phone"
                className="w-full rounded-lg border-border border focus:border-green-500 transition-all duration-200 outline-none p-3 pe-12 text-sm shadow-sm"
                placeholder="ادخل رقم الواتساب "
              />
              <Error formik={formik} nameOfField={"phone"} />
            </div>
          </div>
          {/* ألمكان */}
          <div>
            <label htmlFor="location" className="sr-only">
              العنوان
            </label>

            <div className="relative">
              <input
                type="text"
                name="location"
                onChange={formik.handleChange}
                value={formik.values.location}
                onBlur={formik.handleBlur}
                className="w-full rounded-lg border-border border focus:border-green-500 transition-all duration-200 outline-none p-3 pe-12 text-sm shadow-sm"
                placeholder="ادخل العنوان  "
              />
              <Error formik={formik} nameOfField={"location"} />
            </div>
          </div>
          <div>
            <label htmlFor="location" className="sr-only">
              الدور
            </label>

            <div className="relative">
              <select
                name="role"
                onChange={formik.handleChange}
                value={formik.values.role}
                onBlur={formik.handleBlur}
                className="w-full rounded-lg text-muted-foreground border-border border focus:border-green-500 transition-all duration-200 outline-none p-3 pe-12 text-sm shadow-sm"
                placeholder="ادخل الدور  ">
                <option className="hidden">ادخل الدور</option>
                <option>مستخدم</option>
                <option>دكتور</option>
              </select>
              <Error formik={formik} nameOfField={"role"} />
            </div>
          </div>
          <div className="flex items-center justify-between ga1">
            <p className="text-sm text-muted-foreground ">
              يوجد حساب
              <Link className="underline mr-1" href="/login">
                تسجيل الدخول
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-primary hover:px-6 transition-all duration-300 hover:bg-primary/90 px-5 py-3 text-sm font-medium text-white">
              {loading ? "جاري التحميل" : "انشاء حساب"}
            </button>
          </div>
        </form>
      </div>

      <div className="relative  h-64 w-full mt-[30px] lg:mt-[90px] sm:h-96 lg:h-[87.5vh] lg:w-1/2">
        <img
          alt="signupImg"
          src="/sign.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default page;
