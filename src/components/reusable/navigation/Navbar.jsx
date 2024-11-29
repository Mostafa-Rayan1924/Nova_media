"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AlignJustify,
  CircleChevronDown,
  CircleUserRound,
  ShoppingCart,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import DropDown from "./DropDown";
import SideBar from "./SideBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "@/store/AuthSlices/loginSlice";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/Dashboard/Dashboard";
const Navbar = () => {
  let pathname = usePathname();

  let { user } = useSelector((state) => state.login);
  let dispatch = useDispatch();
  let [openNav, setOpenNav] = useState(false);
  let logOutFunc = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("هل انت متاكد من تسجيل الخروج؟");
    if (confirmLogout) {
      dispatch(logout());
      toast.success("تم تسجيل الخروج بنجاح");
    }
  };
  return (
    <header className="fixed inset-0 w-full h-[98px] border-b-2 border-border z-50 bg-white   dark:backdrop-blur-md dark:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link href={"/"}>
            <Image
              src={"/whitelogo.png"}
              width={75}
              height={50}
              className="dark:hidden "
              alt="nova-media  logo"
            />
            <Image
              src={"/logo.png"}
              width={75}
              height={50}
              className="hidden dark:flex"
              alt="nova-media  logo"
            />
          </Link>
        </div>
        {/* links */}
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center md:gap-4  lg:gap-6 ">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}>
                <Link
                  className={`text-muted-foreground md:text-sm lg:text-[17px] transition hover:text-foreground ${
                    pathname === "/" && "text-black dark:text-white "
                  } `}
                  href="/">
                  الرئيسية
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}>
                <Link
                  className={`text-muted-foreground group md:text-sm lg:text-[17px] ${
                    pathname === "/services" && "text-black dark:text-white"
                  } relative flex items-center gap-1 transition hover:text-foreground `}
                  href="/services">
                  خدماتنا
                  <CircleChevronDown size={15} className="font-bold" />
                  <DropDown />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}>
                <Link
                  className={`text-muted-foreground md:text-sm lg:text-[17px]  ${
                    pathname === "/market" && "text-black dark:text-white"
                  }  transition hover:text-foreground `}
                  href="/market">
                  المتجر
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.6 }}>
                <Link
                  className={`text-muted-foreground md:text-sm lg:text-[17px]  ${
                    pathname === "/contactus" && "text-black dark:text-white"
                  }  transition hover:text-foreground `}
                  href="/contactus">
                  اتصل بنا
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.8 }}>
                <Link
                  className={`text-muted-foreground md:text-sm lg:text-[17px]  ${
                    pathname === "/team" && "text-black dark:text-white"
                  }  transition hover:text-foreground `}
                  href="/team">
                  فريق العمل
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 1 }}>
                <Link
                  className={`text-muted-foreground md:text-sm lg:text-[17px]  ${
                    pathname === "/exhibitions" && "text-black dark:text-white"
                  }  transition hover:text-foreground `}
                  href="/exhibitions">
                  المعارض
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
        {/* login */}
        {user?.token &&
        user?.userData?.role === "ادارة" &&
        pathname?.includes("/dashboard") ? (
          <Dashboard />
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              {user?.token ? (
                <div className="flex items-center gap-4">
                  <ShoppingCart className="cursor-pointer flex " size={25} />
                  <motion.button
                    onClick={logOutFunc}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      damping: 5,
                      stiffness: 320,
                    }}
                    className="md:flex  hidden  py-2 px-6 bg-primary text-white rounded-lg ">
                    تسجيل الخروج
                  </motion.button>{" "}
                </div>
              ) : (
                <Link href={"/signup"}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      damping: 5,
                      stiffness: 320,
                    }}
                    className="md:flex items-center hidden gap-2 py-2 px-6 bg-primary text-white rounded-lg ">
                    <CircleUserRound size={20} />
                    سجل الان
                  </motion.button>{" "}
                </Link>
              )}
              <ModeToggle />
            </div>
            <div
              onClick={() => setOpenNav(!openNav)}
              className="flex cursor-pointer  md:hidden">
              <AlignJustify size={35} />
            </div>
          </div>
        )}

        {/* open sidebar and close */}
        <AnimatePresence>
          {openNav && <SideBar setOpenNav={setOpenNav} />}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
