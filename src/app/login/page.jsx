"use client";
import Link from "next/link";
import Error from "@/components/validations/Error";
import { loginSchema } from "@/components/validations/ValidationSchema";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginFunc } from "@/store/AuthSlices/loginSlice";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  let dispatch = useDispatch();
  let { user, loading } = useSelector((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      let params = {
        email: values.email,
        password: values.password,
      };
      dispatch(loginFunc(params));
      formik.resetForm();
    },
  });
  return (
    <section className="relative flex flex-wrap mt-[120px] sm:mt-[80px] lg:mt-0 lg:h-screen lg:items-center">
      <div className="w-full px-4 py-6 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            تسجيل الدخول إلى حسابك
          </h2>

          <p className="mt-4 text-muted-foreground">
            مرحبًا بك مرة أخرى! قم بإدخال بياناتك للوصول إلى حسابك ومتابعة
            الاستفادة من خدماتنا
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              الايميل
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className={`w-full rounded-lg  border focus:border-green-500 transition-all duration-200 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-border"
                } outline-none p-4 pe-12 text-sm shadow-sm`}
                placeholder="ادخل الايميل"
              />
              <Error formik={formik} nameOfField={"email"} />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div>
              <label htmlFor="password" className="sr-only">
                كلمة السر
              </label>

              <div className="relative ">
                <input
                  type={showPassword ? "text" : "password"} // التبديل بين النص وكلمة المرور
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                  onBlur={formik.handleBlur}
                  className={`w-full rounded-lg  border focus:border-green-500 transition-all duration-200 ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : "border-border"
                  } outline-none p-4 pe-12 text-sm shadow-sm`}
                  placeholder="ادخل كلمة السر"
                />
                {/* أيقونة العين */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // التبديل عند النقر
                  className="absolute top-1/2 -translate-y-1/2  left-3 flex items-center text-muted-foreground ">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <Error formik={formik} nameOfField={"password"} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between ga1">
            <p className="text-sm text-muted-foreground ">
              لا يوجد حساب
              <Link className="underline mr-1" href="/signup">
                انشأ حساب
              </Link>
            </p>

            <button
              type="submit"
              disabled={loading}
              className={`inline-block rounded-lg bg-primary hover:px-6 transition-all duration-300 hover:bg-primary/90 px-5 ${
                loading ? "cursor-not-allowed opacity-50" : "bg-primary"
              } py-3 text-sm font-medium text-white`}>
              {loading ? "جاري الارسال" : "تسجيل الدخول"}
            </button>
          </div>
        </form>
      </div>

      <div className="relative  h-64 w-full mt-[30px] lg:mt-[90px] sm:h-96 lg:h-[87.5vh] lg:w-1/2">
        <img
          alt="loginImg"
          src="/log.png"
          className="absolute inset-0 h-full w-full object-fill"
        />
      </div>
    </section>
  );
};

export default Login;
