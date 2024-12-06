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
  role: yup.string().required("ادخل دور الحساب"),
  role: yup.string().required("ادخل النوع "),
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
  image: yup.mixed().required("الصورة مطلوبة"),
  description: yup.string().required("الوصف مطلوب"),
  number: yup.string().min(1, "اقل عددهو 1").required("ادخل عدد التفاعل"),
});
export let addServ = yup.object().shape({
  name: yup.string().min(3, "ادخل اسم حقيقي").required("الاسم مطلوب"),
  image: yup.mixed().required("الصور مطلوبة"),
  category: yup.string().required("التصنيف مطلوب"),
});
export let addTeam = yup.object().shape({
  name: yup.string().min(3, "ادخل اسم حقيقي").required("الاسم مطلوب"),
  image: yup.mixed().required("الصورة مطلوبة"),
  email: yup.string().email("ادخل الايميل بشكل صحيح").required("ادخل الايميل"),
  phone: yup
    .string()
    .min(11, "ادخل الرقم كامل")
    .max(11, "الحد الاقصي 11 رقم")
    .required("الرقم مطلوب"),
  department: yup.string().required("ادخل التصنيف"),
  qualification: yup.string().required("ادخل المؤهل"),
});
export let addExh = yup.object().shape({
  name: yup.string().min(3, "ادخل اسم حقيقي").required("الاسم مطلوب"),
  mention: yup.string().required("المنشن مطلوب"),
  description: yup.string().required("الوصف مطلوب"),
  media: yup.mixed().required("الصور مطلوبة"),
  department: yup.string().required("التصنيف مطلوب"),
});
export let formAd = yup.object().shape({
  name: yup.string().min(3, "ادخل اسم حقيقي").required("الاسم مطلوب"),
  cv: yup.mixed().required("الcv مطلوب"),
  phone: yup
    .string()
    .min(11, "ادخل الرقم كامل")
    .max(11, "الحد الاقصي 11 رقم")
    .required("الرقم مطلوب"),
  add: yup.string().required("ادخل العنوان"),
  jobTitle: yup.string().required("ادخل المسمي الوظيفي"),
});
export let jobAd = yup.object().shape({
  jobTitle: yup.string().required(" المسمي الوظيفي مطلوب"),
  JobImg: yup.mixed().required("الصوره مطلوبة"),
  jobDesc: yup.string().required("الوصف مطلوب"),
});
