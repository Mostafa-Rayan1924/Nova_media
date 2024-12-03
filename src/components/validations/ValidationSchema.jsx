import * as yup from "yup";
export let signUpSchema = yup.object().shape({
  username: yup.string().min(3, "ادخل اسمك الحقيقي").required("الاسم مطلوب"),
  location: yup.string().min(3, "ادخل عنوانك الصحيح").required("العنوان مطلوب"),
  email: yup.string().email("ادخل الايميل الصحيح").required("ادخل الايميل "),
  password: yup
    .string()
    .min(8, "اقل عدد من الرموز هو 8")
    .required("ادخل كلمة السر"),
  phone: yup
    .string()
    .min(11, "ادخل رقم الواتساب كامل")
    .max(11, "ادخل رقم الواتساب كامل")
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
    .required("ادخل كلمة السر"),
});
export let addProject = yup.object().shape({
  name: yup.string().min(3, "ادخل اسم حقيقي").required("الاسم مطلوب"),
  image: yup.string().required("ادخل الصوره"),
  description: yup.string().required("الوصف مطلوب"),
  number: yup.string().min(1, "اقل عددهو 1").required("ادخل عدد التفاعل"),
});
