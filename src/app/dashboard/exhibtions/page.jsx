"use client";
import MainTitle from "@/components/reusable/MainTitle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Error from "@/components/validations/Error";
import { Loader2 } from "lucide-react";
import { BtnsFilter } from "@/components/constants/BtnsFilterInExh";
import { addExhFunc } from "@/store/DashboardSlices/addExh";
import { addExh } from "@/components/validations/ValidationSchema";

const Exhibtions = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  const { loading } = useSelector((state) => state.addExh);
  const [previewMedia, setPreviewMedia] = useState([]);
  const dispatch = useDispatch();

  if (user?.userData?.role !== "ادارة") router.push("/");

  const formik = useFormik({
    initialValues: {
      name: "",
      media: null,
      department: "",
      mention: "",
      description: "",
    },
    validateOnBlur: true,
    validationSchema: addExh,
    onSubmit: async (values) => {
      let data = new FormData();
      data.append("name", values.name);
      data.append("department", values.department);
      data.append("mention", values.mention);
      data.append("description", values.description);
      for (let i = 0; i < values.media.length; i++) {
        data.append("media", values.media[i]);
      }
      await dispatch(addExhFunc(data));
      formik.resetForm();
      setPreviewMedia([]);
    },
  });

  // Handle File Change
  const handleFileChange = (event) => {
    const files = [...event.target.files];
    formik.setFieldValue("media", files);
    const mediaPreviews = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.split("/")[0],
    }));

    setPreviewMedia(mediaPreviews);
  };

  return (
    <section className="my-[120px] container">
      <MainTitle
        title="اضف معرض جديد"
        btnTitle="جميع المعارض"
        href="exhibitions"
      />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full grid place-items-center bg-black/60 z-[100]">
          <Loader2 size={50} className="text-primary animate-spin" />
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="mx-auto max-w-3xl">
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">نوع المعرض</label>
          <select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.department}
            name="department"
            className="border border-border outline-none text-sm  w-full  rounded-md p-3">
            {BtnsFilter?.map((item) => {
              return (
                <>
                  <option className="disabled hidden">اختر نوع المعرض</option>
                  <option>{item?.title}</option>
                </>
              );
            })}
          </select>
        </div>
        <Error formik={formik} nameOfField={"department"} />
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">عنوان المعرض</label>
          <input
            className="border border-border outline-none text-sm  w-full  rounded-md p-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="اضف عنوان المعرض"
            name="name"
          />
        </div>
        <Error formik={formik} nameOfField={"name"} />
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">بالتعاون مع</label>
          <input
            className="border border-border outline-none text-sm  w-full  rounded-md p-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mention}
            placeholder="اسم الشريك في العمل"
            name="mention"
          />
        </div>
        <Error formik={formik} nameOfField={"mention"} />
        <div className="flex flex-col items-start  sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">وصف المعرض</label>
          <input
            className="border border-border outline-none text-sm  w-full  rounded-md p-3"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            placeholder="وصف المعرض"
            name="description"
          />
        </div>
        <Error formik={formik} nameOfField={"description"} />
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mb-4">
          <label className="min-w-[120px]">صور وفيديوهات المعرض</label>
          <input
            className="border border-border outline-none text-sm w-full rounded-md p-2"
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
        </div>
        <Error formik={formik} nameOfField={"media"} />

        {/* Preview Section */}
        {previewMedia.length > 0 && (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {previewMedia.map((media, index) => {
              if (media.type === "image") {
                return (
                  <img
                    key={index}
                    src={media.url}
                    alt={`Preview ${index}`}
                    className="size-32 border border-border object-cover rounded"
                  />
                );
              } else if (media.type === "video") {
                return (
                  <video
                    key={index}
                    src={media.url}
                    controls
                    className="size-32 border border-border rounded"
                  />
                );
              }
            })}
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

export default Exhibtions;
