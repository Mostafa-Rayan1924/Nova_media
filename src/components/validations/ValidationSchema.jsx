import * as yup from "yup";
export let signUpSchema = yup.object().shape({
  username: yup.string().min(3, "ادخل اسمك الحقيقي").required("الاسم مطلوب"),
  location: yup.string().min(3, "ادخل عنوانط الصحيح").required("العنوان مطلوب"),
  email: yup
    .string()
    .email("ادخل الايميل الصحيح")
    .required("ادخل الايميل الصحيح"),
  password: yup
    .string()
    .min(8, "اقل عدد من الرموز هو 8")
    .required("ادلخل كلمة السر"),
  phone: yup
    .string()
    .min(11, "ادخل رقم الواتساب كامل")
    .required("رقم الواتساب مطلوب"),
  role: yup.string().required("ادخل نوع الحساب"),
});

export let loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("ادخل الايميل الصحيح")
    .required("ادخل الايميل الصحيح"),
  password: yup
    .string()
    .min(8, "اقل عدد من الرموز هو 8")
    .required("ادلخل كلمة السر"),
});
