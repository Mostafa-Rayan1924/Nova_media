import React from "react";

const ManagerSkeleton = () => {
  return (
    <div className="max-w-[700px] relative p-4 overflow-hidden  mx-auto bg-background/90 border border-border rounded-lg">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r   from-green-300 via-blue-500 to-purple-600"></span>
      {/* box */}
      <div className="flex  flex-col-reverse md:flex-row gap-4 justify-between flex-wrap">
        <div className="w-full h-full md:flex-1 space-y-3 mt-4 sm:space-y-5">
          <div className="h-2 w-[50%] bg-accent animate-pulse rounded-lg"></div>
          <div className="h-10 w-[90%] bg-accent animate-pulse rounded-lg"></div>

          <div className="h-6 w-[70%] bg-accent animate-pulse rounded-lg"></div>
          <div className="h-8 w-[80%] bg-accent animate-pulse rounded-lg"></div>
          <div className="h-4 w-[60%] bg-accent animate-pulse rounded-lg"></div>

          <div className="h-10 w-full bg-accent animate-pulse rounded-lg"></div>
        </div>
        <div className="size-[300px] mx-auto bg-accent animate-pulse   rounded-lg aspect-square"></div>
      </div>
    </div>
  );
};

export default ManagerSkeleton;
