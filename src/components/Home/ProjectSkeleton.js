const ProjectSkeleton = () => {
  return (
    <div className="border border-border">
      <div className="flex items-center justify-between p-3 flex-row-reverse">
        <div className="flex items-center gap-2">
          <div className="space-y-1">
            <div className="w-10 h-1 bg-accent animate-pulse"></div>
            <div className="w-8 h-1 bg-accent animate-pulse"></div>
          </div>
          <div className="size-[50px] bg-accent  animate-pulse rounded-full"></div>
        </div>
        <div className="w-4 h-1 bg-accent animate-pulse"></div>
      </div>
      <div className="w-full h-[300px] bg-accent animate-pulse"></div>
      <div className="flex flex-col gap-3 p-3">
        <div className="w-full h-2 bg-accent animate-pulse"></div>
        <div className="w-full h-4 bg-accent animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
