"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  AlignJustify,
  CircleArrowOutUpLeft,
  CircleChevronDown,
  CircleUserRound,
  FileCheck,
  ShoppingCart,
} from "lucide-react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/Dashboard/Dashboard";
import Profile from "./Profile";
import { dropdownLinks } from "@/components/constants/dropDownLinks";
import { getAd } from "@/store/AdsSlices/getAdSlice";
import { getJob } from "@/store/AdsSlices/getJobSlice";
const Navbar = () => {
  let pathname = usePathname();
  let { user } = useSelector((state) => state.login);
  let [openNav, setOpenNav] = useState(false);
  let { data } = useSelector((state) => state.getAd);
  let jobs = useSelector((state) => state.getJobs);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAd());
    dispatch(getJob());
  }, []);
  return (
    <header className="fixed inset-0 w-full h-[98px] border-b-2 border-border z-50 bg-white   dark:backdrop-blur-md dark:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={75}
              height={50}
              className="dark:hidden "
              alt="nova-media  logo"
            />
            <Image
              src={"/themeLogo.png"}
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
                  className={`text-muted-foreground md:text-sm lg:text-[17px] transition hover:text-primary ${
                    pathname === "/" && "text-primary"
                  } `}
                  href="/">
                  الرئيسية
                </Link>
              </motion.li>
              {/* services */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}>
                      <NavigationMenuTrigger>خدماتنا</NavigationMenuTrigger>
                    </motion.div>
                    <NavigationMenuContent>
                      <ul className="w-fit  p-2   ">
                        {dropdownLinks.map((item) => (
                          <Link
                            className="whitespace-nowrap block hover:bg-accent duration-200 p-2 rounded-md  text-sm text-foreground  hover:text-primary text-right"
                            key={item?.title}
                            title={item?.title}
                            href={`${item.path}?${item.id}`}>
                            {item.title}
                            {item.soon && (
                              <span className="text-xs absolute left-3 bottom-3 bg-primary text-white p-1 rounded ">
                                قريبا
                              </span>
                            )}
                          </Link>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}>
                <Link
                  className={`text-muted-foreground md:text-sm lg:text-[17px]  ${
                    pathname === "/market" && "text-black dark:text-white"
                  }  transition hover:text-primary `}
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
                  }  transition hover:text-primary `}
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
                  }  transition hover:text-primary `}
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
                  }  transition hover:text-primary `}
                  href="/exhibitions">
                  المعارض
                </Link>
              </motion.li>
              {/* ads */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 1.2 }}>
                      <NavigationMenuTrigger>الإعلانات</NavigationMenuTrigger>
                      {(data.length > 0 || jobs.data.length > 0) && (
                        <div className="absolute size-2 animate-bounce rounded-full bg-primary top-0 left-0"></div>
                      )}
                    </motion.div>
                    <NavigationMenuContent>
                      <ul className="w-fit space-y-1   p-3   ">
                        <Link
                          className="whitespace-nowrap flex items-center justify-end gap-2 text-right hover:bg-accent duration-200 p-2 rounded-md  text-sm text-foreground  hover:text-primary "
                          href={"/job-ads"}>
                          إعلانات الوظائف
                          <FileCheck size={20} />
                        </Link>
                        <Link
                          className="whitespace-nowrap flex items-center justify-end gap-2 text-right   hover:bg-accent duration-200 p-2 rounded-md  text-sm text-foreground  hover:text-primary "
                          href={"/site-ads"}>
                          إعلانات الموقع
                          <CircleArrowOutUpLeft size={20} />
                        </Link>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
                  <Profile />
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
                    className="md:flex items-center hidden gap-2 py-2 px-4 lg:px-6 bg-primary text-white rounded-lg ">
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
