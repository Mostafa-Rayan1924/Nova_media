const CategorySkeleton = () => {
  return (
    <div className="bg-gradient-to-t h-[140px]   relative  mt-10  flex flex-col  justify-center  items-center">
      <div
        className="h-[140px] w-full dark:bg-accent bg-gray-300 rounded-[30px] animate-pulse absolute top-[-25%]"
        alt="service"
      />
      <h2 className="font-semibold w-[80px] h-[15px] dark:bg-accent/75 bg-gray-400 animate-pulse "></h2>
    </div>
  );
};

export default CategorySkeleton;
