"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CalendarFold } from "lucide-react";
const OneComment = () => {
  let { data } = useSelector((state) => state.getOneExhibtion);
  const [showAllComments, setShowAllComments] = useState(false);
  let { user } = useSelector((state) => state.login);
  // الحصول على التعليقات
  const comments = data?.doc?.comment || [];

  // تحديد التعليقات التي يتم عرضها بناءً على الحالة
  const visibleComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div>
      {comments.length > 0 ? (
        <>
          {visibleComments.map((item, index) => (
            <div className="border-b-2 relative hover:border-primary duration-200 border-border dark:border-[#333] dark:hover:border-primary pb-2 mb-4">
              <div key={index} className=" flex items-center gap-2">
                <Image
                  src={
                    user?.userData?.type == "ذكر" ? "/person.png" : "/woman.png"
                  }
                  width={50}
                  height={50}
                  className="rounded-full aspect-square object-cover"
                  alt="profile img"
                />
                <div>
                  <h3 className="text-lg mb-1 font-bold">
                    {item?.userid?.username}
                  </h3>
                  <p className="text-sm text-wrap">{item?.comment}</p>
                </div>
              </div>
              <small className="text-[12px]  flex justify-end mt-2 sm:mt-0 items-center gap-2 ">
                <CalendarFold className="text-primary" size={15} />
                {item?.createdAt?.slice(0, 10)}
              </small>
            </div>
          ))}

          {/* زر "اقرأ المزيد" */}
          {comments.length > 3 && (
            <button
              onClick={() => setShowAllComments(!showAllComments)}
              className="text-primary  font-semibold ">
              {showAllComments ? "عرض أقل" : "اقرأ المزيد"}
            </button>
          )}
        </>
      ) : (
        <h2 className="text-center py-2 text-lg font-semibold">
          لا يوجد تقييمات
        </h2>
      )}
    </div>
  );
};

export default OneComment;
