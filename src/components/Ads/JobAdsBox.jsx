import { socialLinks } from "../constants/SocialLinks";
import Link from "next/link";

const JobAdsBox = () => {
  return (
    <div className="flex flex-col-reverse even:md:flex-row-reverse even:flex-col eve md:h-[350px] bg-background    sm:overflow-y-auto  md:flex-row border-2 border-border rounded-lg overflow-hidden">
      <div className="flex-1  h-full ">
        <h2 className="bg-accent py-3 text-center font-bold ">إعلان توظيف</h2>
        <div className="px-4 py-6 space-y-4  sm:space-y-7">
          <div className="flex  flex-wrap items-start sm:items-center gap-4 justify-between">
            <h2 className="font-semibold  sm:min-w-fit text-sm">
              المسمي الوظيفة:
            </h2>
            <h3 className="text-muted-foreground font-semibold text-center sm:flex-1 text-sm">
              جرافيك ديزاينر
            </h3>
          </div>
          <div className="flex  flex-wrap items-start sm:items-center gap-4 justify-between">
            <h2 className="font-semibold sm:min-w-fit  text-sm">
              وصف الوظيفة:
            </h2>
            <p className="text-muted-foreground text-center font-semibold  sm:flex-1 text-sm leading-relaxed">
              مطلوب جرافيك ديزاينر للعمل بالشركة من 9ص الي 4م
            </p>
          </div>
          <div className="flex  flex-wrap items-center gap-4 justify-between">
            <h2 className="font-semibold sm:min-w-fit text-sm">
              تواصل معنا عبر:
            </h2>
            <div className="flex items-center justify-center   flex-1 gap-2">
              {socialLinks.map((item, index) => {
                return (
                  <a
                    href={item.path}
                    key={item.id}
                    target="_blank"
                    className={`size-8 sm:size-10 group icon transition-all duration-300    rounded-lg bg-accent dark:bg-accent      hover:text-white   grid place-items-center  cursor-pointer  `}>
                    <span>{item.icon}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4  justify-between">
            <h2 className="font-semibold sm:min-w-fit text-sm "> للتقديم:</h2>
            <Link
              className="flex items-center sm:flex-1  sm:justify-center"
              href={"/job-ads/form"}>
              <button className="    bg-primary text-white py-2 px-8  rounded-lg     ">
                ادخل بياناتك
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full sm:sticky sm:top-0">
        <img
          className="w-full h-[250px] sm:h-[350px] md:size-full aspect-square object-fill"
          src="/banner.jpg"
          alt="jobImg"
        />
      </div>
    </div>
  );
};

export default JobAdsBox;
