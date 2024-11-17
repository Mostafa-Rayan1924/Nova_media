import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background/80 w-full z-[100] h-full flex items-center justify-center">
      <Loader2 className="size-10 text-primary animate-spin" />
    </div>
  );
};

export default Loading;
