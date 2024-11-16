"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background  p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          عذرًا، حدث خطأ ما!
        </h1>
        <p className="text-lg text-muted-foreground  mb-8">
          الصفحة التي تحاول الوصول إليها غير متوفرة. يمكنك العودة إلى الصفحة
          الرئيسية أو محاولة إعادة تحميل الصفحة.
        </p>
        <div className="flex justify-center items-center gap-3  rtl:space-x-reverse">
          <Link
            href={"/"}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/85 transition">
            الصفحة الرئيسية
          </Link>
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue/600 transition">
            إعادة تحميل الصفحة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
