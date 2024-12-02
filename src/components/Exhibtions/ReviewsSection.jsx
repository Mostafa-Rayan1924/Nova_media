import AddComment from "./AddComment";
import OneComment from "./OneComment";
// rev
const ReviewsSection = ({ setNum }) => {
  return (
    <div id="review">
      <h2 className="text-3xl font-bold mb-5 ">تقييمات المعرض</h2>
      {/* comments */}
      <div className="flex flex-col  relative bg-accent rounded-lg  justify-start  text-start   p-3  ">
        {/* comment shape */}
        <OneComment />
      </div>
      {/* add comment */}
      <AddComment setNum={setNum} />
    </div>
  );
};

export default ReviewsSection;
