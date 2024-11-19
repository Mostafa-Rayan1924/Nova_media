import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="grid h-screen place-content-center bg-background px-4">
      <div className="text-center">
        <Image src={"/404.png"} width={400} height={400} alt="error img" />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground  sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="my-4 text-muted-foreground">عذرا مسار خاطئ</p>
        <Link href={"/"}>
          <Button className={buttonVariants({ size: "lg" })}>
            عد الى الصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
