import AddComment from "./AddComment";
import OneComment from "./OneComment";
// rev
const ReviewsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 ">تقييمات المعرض</h2>
      {/* comments */}
      <div className="bg-accent p-2  transition-all duration-200 rounded-lg">
        {/* comment shape */}
        <OneComment />
      </div>
      {/* add comment */}
      <AddComment />
    </div>
  );
};

export default ReviewsSection;
