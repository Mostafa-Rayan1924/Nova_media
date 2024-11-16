import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background/80 w-full z-[100] h-full flex items-center justify-center">
      <div class="loader"></div>
    </div>
  );
};

export default Loading;
