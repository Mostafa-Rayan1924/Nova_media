"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { GetCats } from "@/store/HomeSlices/CategoriesSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addServFunc } from "@/store/DashboardSlices/addServ";
import { addServ } from "@/components/validations/ValidationSchema";
import Error from "@/components/validations/Error";
import { Loader2 } from "lucide-react";

const DashboardServices = () => {
  let router = useRouter();
  let { user } = useSelector((state) => state.login);
  let { categories } = useSelector((state) => state.categories);
  let { loading } = useSelector((state) => state.addServ);
  const [previewImages, setPreviewImages] = useState([]);
  const [previewVideos, setPreviewVideos] = useState([]);

  if (user?.userData?.role !== "ادارة") router.push("/");

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCats());
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: null,
      category: "",
    },
    validateOnBlur: true,
    validationSchema: addServ,
    onSubmit: async (values) => {
      let data = new FormData();
      await data.append("name", values.name);
      await data.append("category", values.category);

      // جمع جميع الصور والفيديوهات تحت نفس المسمي "images"
      if (values.image) {
        for (let i = 0; i < values.image.length; i++) {
          data.append("images", values.image[i]);
        }
      }

      await dispatch(addServFunc(data));
      formik.resetForm();
      setPreviewImages([]);
      setPreviewVideos([]);
    },
  });

  // Handle File Change
  const handleFileChange = (event) => {
    const files = [...event.target.files];
    const images = files.filter((file) => file.type.startsWith("image"));
    const videos = files.filter((file) => file.type.startsWith("video"));

    // دمج الصور والفيديوهات في الحقل الواحد "images"
    formik.setFieldValue("image", [...images, ...videos]);

    const imagePreviews = images.map((file) => URL.createObjectURL(file));
    setPreviewImages(imagePreviews);

    const videoPreviews = videos.map((file) => URL.createObjectURL(file));
    setPreviewVideos(videoPreviews);
  };

  // Handle remove file
  const handleRemoveFile = (index, fileType) => {
    if (fileType === "image") {
      const updatedImages = previewImages.filter((_, i) => i !== index);
      setPreviewImages(updatedImages);

      const updatedFiles = formik.values.image.filter((_, i) => i !== index);
      formik.setFieldValue("image", updatedFiles);
    } else if (fileType === "video") {
      const updatedVideos = previewVideos.filter((_, i) => i !== index);
      setPreviewVideos(updatedVideos);

      const updatedFiles = formik.values.image.filter((_, i) => i !== index);
      formik.setFieldValue("image", updatedFiles);
    }
  };

  return (
    <section className="my-[120px] container">
      <MainTitle
        title="اضف خدمة جديده"
        btnTitle="جميع الخدمات"
        href="services?6734eb12cf3720014ac84e62"
      />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-black/60 z-[100]">
          <Loader2 size={50} className="text-primary animate-spin" />
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">نوع الخدمة</label>
          <select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            name="category"
            className="border border-border outline-none text-sm w-full rounded-md p-3"
            type="text">
            {categories?.map((item) => (
              <>
                <option className="hidden">اختر التصنيف</option>
                <option key={item._id} value={item?._id}>
                  {item?.name}
                </option>
              </>
            ))}
          </select>
        </div>
        <Error formik={formik} nameOfField={"category"} />

        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">اسم الخدمة</label>
          <input
            className="border border-border outline-none text-sm w-full rounded-md p-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="اضف اسم الخدمة"
            name="name"
          />
        </div>
        <Error formik={formik} nameOfField={"name"} />

        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">صور وفيديوهات الخدمة</label>
          <input
            className="border border-border outline-none text-sm w-full rounded-md p-2"
            type="file"
            multiple
            onChange={handleFileChange}
            placeholder="اضف الصور والفيديوهات"
            name="image"
          />
        </div>
        <Error formik={formik} nameOfField={"image"} />

        {/* عرض الصور المحملة */}
        {previewImages.length > 0 && (
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {previewImages.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Preview ${index}`}
                  className="size-32 border border-border object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index, "image")}
                  className="absolute top-2 bg-accent right-2 text-primary p-1 grid place-items-center font-bold text-sm">
                  X
                </button>
              </div>
            ))}
          </div>
        )}

        {/* عرض الفيديوهات المحملة */}
        {previewVideos.length > 0 && (
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {previewVideos.map((src, index) => (
              <div key={index} className="relative">
                <video
                  controls
                  className="size-32 border border-border object-cover rounded">
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index, "video")}
                  className="absolute top-2 bg-accent right-2 text-primary p-1 grid place-items-center font-bold text-sm">
                  X
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          className={`${
            loading ? "opacity-50 pointer-events-none" : "opacity-100"
          } mx-auto block bg-green-500 text-white mt-10 rounded-lg w-[120px] duration-200 hover:w-[140px] hover:bg-green-600 py-2`}>
          {loading ? "جاري الاضافه" : "اضافه"}
        </button>
      </form>
    </section>
  );
};

export default DashboardServices;
