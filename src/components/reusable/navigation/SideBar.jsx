import { dropdownLinks } from "@/components/constants/dropDownLinks";
import { CircleUserRound, CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const SideBar = ({ setOpenNav }) => {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 left-0 w-full z-[70]  bg-background/80 h-screen md:hidden"></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        className="flex fixed overflow-y-auto z-[70]  top-0 right-0 w-[70%] sm:w-1/2 h-screen md:hidden flex-col justify-between border-e bg-background">
        {/* close button */}
        <CircleX
          onClick={() => setOpenNav(false)}
          className="absolute top-6 hover:text-primary cursor-pointer transition-all duration-200 left-6"
        />
        <div className="px-4 py-6">
          {/* logo */}
          <div className="mr-10">
            <Image
              src={"/logo white.png"}
              width={75}
              height={50}
              className="dark:hidden"
              alt="nova-media  logo"
            />
            <Image
              src={"/logo.png"}
              width={75}
              height={50}
              className="hidden dark:flex"
              alt="nova-media  logo"
            />
          </div>
          {/* links */}
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href="/"
                className="block rounded-lg bg-accent hover:text-primary px-4 py-2 text-sm font-medium text-muted-foreground">
                الرئيسية
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden ">
                <summary className="flex cursor-pointer  items-center justify-between rounded-lg px-4 py-2 text-muted-foreground hover:bg-accent hover:text-primary">
                  <span className="text-sm font-medium "> خدماتنا </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  {dropdownLinks.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.path}
                          className="block relative hover:text-primary rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent ">
                          {item.title}
                          {item.soon && (
                            <h3 className="absolute left-2 top-1 bg-primary text-[13px] text-white p-1 rounded">
                              قريباً
                            </h3>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
            <li>
              <a
                href="/market"
                className="block rounded-lg hover:bg-accent hover:text-primary px-4 py-2 text-sm font-medium text-muted-foreground">
                المتجر
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className="block rounded-lg hover:bg-accent hover:text-primary px-4 py-2 text-sm font-medium text-muted-foreground">
                اتصل بنا
              </a>
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 5,
              stiffness: 320,
            }}
            className="flex items-center mt-6 justify-center  gap-2 py-2  w-full bg-primary text-white rounded-lg ">
            <CircleUserRound size={20} />
            سجل الان
          </motion.button>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-border">
          <a href="#" className="flex items-center gap-2 bg-background p-4">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>
                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
