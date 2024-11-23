"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isOverScreen, setIsOverScreen] = useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOverScreen(window.scrollY > 80);
    });
  }, []);

  return (
    <Button
      size="icon"
      className={cn(
        "fixed bottom-[40px]   right-8 transition-all duration-300 z-10",
        !isOverScreen && "opacity-0 translate-y-6 pointer-events-none"
      )}
      onClick={() => window.scrollTo(0, 0)}>
      <ArrowUpCircle />
    </Button>
  );
};

export default ScrollToTop;
