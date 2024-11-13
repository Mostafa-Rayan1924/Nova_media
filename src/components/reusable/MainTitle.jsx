import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

const MainTitle = ({ title, btnTitle, href }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
      <Link href={`/${href}`}>
        <Button className={buttonVariants({ size: "lg" })}>{btnTitle}</Button>
      </Link>
    </div>
  );
};

export default MainTitle;
