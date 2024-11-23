"use client";
import { dropdownLinks } from "@/components/constants/dropDownLinks";
import { CircleUserRound, CircleX, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "@/store/AuthSlices/loginSlice";
import { usePathname } from "next/navigation";
const SideBar = ({ setOpenNav }) => {
  let { user } = useSelector((state) => state.login);
  let pathname = usePathname();
  let dispatch = useDispatch();
  let logOutFunc = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("هل انت متاكد من تسجيل الخروج؟");
    if (confirmLogout) {
      dispatch(logout());
      toast.success("تم تسجيل الخروج بنجاح");
      setOpenNav(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.3,
        }}
        className="fixed top-0 left-0 w-full z-[120]  bg-background/80 h-screen md:hidden"></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 120,
        }}
        className="flex fixed  z-[120]  top-0 right-0 w-[80%] sm:w-1/2 h-screen md:hidden flex-col justify-between border-e bg-background">
        {/* close button */}
        <CircleX
          onClick={() => setOpenNav(false)}
          className="absolute top-6 hover:text-primary cursor-pointer transition-all duration-200 left-6"
        />
        <div className="px-4 py-6">
          {/* logo */}
          <div onClick={() => setOpenNav(false)} className="mr-10">
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
            <li onClick={() => setOpenNav(false)}>
              <Link
                href="/"
                className={`block rounded-lg ${
                  pathname === "/" && "bg-accent"
                } hover:text-primary px-4 py-2 text-sm font-medium text-muted-foreground`}>
                الرئيسية
              </Link>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden ">
                <summary
                  className={`flex cursor-pointer  items-center justify-between rounded-lg px-4 py-2 text-muted-foreground hover:bg-accent hover:text-primary ${
                    pathname == "/services" && "bg-accent"
                  }`}>
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
                      <li onClick={() => setOpenNav(false)} key={item.id}>
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
            <li onClick={() => setOpenNav(false)}>
              <Link
                href="/market"
                className={`block rounded-lg ${
                  pathname === "/market" && "bg-accent"
                } hover:text-primary px-4 py-2 text-sm font-medium text-muted-foreground`}>
                المتجر
              </Link>
            </li>
            <li onClick={() => setOpenNav(false)}>
              <Link
                href="/contactus"
                className={`block rounded-lg ${
                  pathname === "/contactus" && "bg-accent"
                } hover:text-primary px-4 py-2 text-sm font-medium text-muted-foreground`}>
                اتصل بنا
              </Link>
            </li>
          </ul>
          {!user.token ? (
            <Link href={"/login"}>
              <motion.button
                onClick={() => setOpenNav(false)}
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
            </Link>
          ) : (
            <div className="flex items-center gap-2 mt-6">
              <motion.button
                onClick={logOutFunc}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  damping: 5,
                  stiffness: 320,
                }}
                className="flex items-center  justify-center  gap-2 py-2  w-full bg-primary text-white rounded-lg ">
                تسجيل الخروج
              </motion.button>
              {user?.userData?.role == "ادارة" && (
                <Link
                  onClick={() => setOpenNav(false)}
                  href={"/dashboard/banners"}
                  className="py-2 text-center  w-full bg-accent  text-foreground rounded-lg">
                  الداشبورد
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-border">
          {user.token ? (
            <Link
              href="#"
              className="flex items-center gap-2 bg-background p-4">
              <Image
                width={40}
                height={40}
                alt="avatar"
                src={"/person.png"}
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {user?.userData?.username}
                  </strong>
                  <span className="text-muted-foreground">
                    {" "}
                    {user?.userData?.email}
                  </span>
                </p>
              </div>
            </Link>
          ) : (
            <h2 className="text-center text-2xl font-semibold py-4">
              مرحبا بك في نوفا ميديا
            </h2>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
