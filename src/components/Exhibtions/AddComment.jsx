import { addComment } from "@/store/ExhibthionsSlice/addCommentSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AddComment = ({ setNum }) => {
  let [comment, setComment] = useState("");
  let { isLoading } = useSelector((state) => state.addComment);
  let { user } = useSelector((state) => state.login);
  let dispatch = useDispatch();
  let router = useRouter();
  let { data } = useSelector((state) => state.getOneExhibtion);
  let id = data?.doc?._id;
  let handleAdd = async (e) => {
    e.preventDefault();
    if (!user?.token) return router.push("/login");
    if (comment == "") return toast.error("ادخل التقييم");
    await dispatch(addComment({ comment, id }));
    setNum(Math.random());
    setComment("");
  };
  return (
    <div className="mt-5 ">
      <form className="flex flex-col gap-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="body"
          placeholder="قم بتقييم المعرض"
          className={`border p-2   border-border  outline-none rounded-lg w-full   resize-none`}
          rows="3"
        />

        <button
          onClick={handleAdd}
          type="submit"
          className={`bg-primary ${
            isLoading
              ? "cursor-not-allowed pointer-events-none"
              : "cursor-pointer"
          } text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-all `}>
          {isLoading ? "جاري التحميل" : "اضف تقييم"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;
