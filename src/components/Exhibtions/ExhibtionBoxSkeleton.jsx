const ExhibtionBoxSkeleton = () => {
  return (
    <div className="space-y-2   rounded-lg  border-border border   ">
      <div className="w-full h-[160px]  bg-accent animate-pulse"></div>
      <div className="p-3 space-y-4 flex flex-col items-end ">
        <h2 className="w-28 h-2 bg-accent animate-pulse"></h2>
        <p className="w-[220px] h-10 bg-accent animate-pulse"></p>
        <div className="w-full h-4 bg-accent animate-pulse "></div>
      </div>
    </div>
  );
};

export default ExhibtionBoxSkeleton;
