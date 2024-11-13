"use client";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify, CircleChevronDown, CircleUserRound } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ModeToggle } from "./ModeToggle";
import DropDown from "./DropDown";
import SideBar from "./SideBar";
import { useState } from "react";
const Navbar = () => {
  let [openNav, setOpenNav] = useState(false);
  return (
    <header className="fixed inset-0 w-full h-fit border-b-2 border-border z-50  backdrop-blur-md bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link href={"/"}>
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
          </Link>
        </div>
        {/* links */}
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 ">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}>
                <Link
                  className="text-muted-foreground transition hover:text-foreground "
                  href="/">
                  الرئيسية
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}>
                <Link
                  className="text-muted-foreground group relative flex items-center gap-1 transition hover:text-foreground "
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
                  className="text-muted-foreground transition hover:text-foreground "
                  href="/market">
                  المتجر
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.6 }}>
                <Link
                  className="text-muted-foreground transition hover:text-foreground "
                  href="/contactus">
                  اتصل بنا
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
        {/* login */}
        <div className="flex items-center gap-4">
          <div className="sm:flex items-center sm:gap-4">
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
            </motion.button>
            <ModeToggle />
          </div>
          <div onClick={() => setOpenNav(!openNav)} className="flex  md:hidden">
            <AlignJustify size={35} />
          </div>
        </div>
        {/* open sidebar and close */}
        <AnimatePresence>
          {openNav && <SideBar setOpenNav={setOpenNav} />}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
