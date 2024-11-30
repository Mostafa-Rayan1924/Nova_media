import { Button, buttonVariants } from "@/components/ui/button";
import { MessageCircle, ThumbsUp } from "lucide-react";
const InfoBox = () => {
  return (
    <div className="flex flex-col md:mt-20   gap-4 text-right">
      <h2 className="text-2xl">المعارض والمعلومات اسماهيلية ثان</h2>
      <p className="  text-muted-foreground leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maxime
        commodi qui, quidem animi asperiores quam, eum magni aut earum, fugiat
        cum ipsum laborum quisquam possimus voluptatibus molestias porro at a
        impedit. Corrupti nesciunt similique explicabo maiores ex autem cumque.
      </p>
      <h2 className="text-xl font-semibold text-primary">
        معرض غنيم للموبيليات
      </h2>
      <div className="grid grid-cols-3 gap-4 ">
        <button className="bg-blue-500 py-2 flex items-center justify-center gap-1 rounded-lg  text-white">
          <ThumbsUp size={20} />
          <span>4</span>
        </button>
        <button className="bg-green-500 py-2 flex items-center justify-center gap-1 rounded-lg  text-white">
          <MessageCircle size={20} />
          <span>4</span>
        </button>
        <button className="bg-primary rounded-lg py-2 text-white">
          ِقم بالتقييم
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
