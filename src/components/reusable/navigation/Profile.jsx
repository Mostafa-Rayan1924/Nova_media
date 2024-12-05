"use client";
import { MailCheck, PhoneCall, UserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "@/store/AuthSlices/loginSlice";
const Profile = () => {
  let [open, setOpen] = useState(false);
  let { user } = useSelector((state) => state.login);
  let dispatch = useDispatch();
  const menuRef = useRef(null);
  let logOutFunc = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("هل انت متاكد من تسجيل الخروج؟");
    if (confirmLogout) {
      dispatch(logout());
      toast.success("تم تسجيل الخروج بنجاح");
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef} className="text-right hidden md:block relative ">
      <button
        type="button"
        className="overflow-hidden rounded-full border  shadow-inner">
        <span className="sr-only">Toggle dashboard menu</span>

        <Image
          onClick={() => setOpen(!open)}
          src={user?.userData?.type == "ذكر" ? "/person.png" : "/woman.png"}
          width={40}
          height={40}
          alt={"profile img"}
          className="size-10 object-cover"
        />
      </button>

      <div
        className={`absolute end-0 z-10   -left-10 top-[120%]  divide-y divide-border  rounded-md border ${
          open ? " block" : " hidden"
        }  border bg-background  shadow-lg`}
        role="menu">
        <div className="p-2">
          <div
            className=" flex items-center whitespace-nowrap gap-2 rounded-lg p-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
            role="menuitem">
            <UserRound size={20} />
            <h2>مرحبا {user?.userData?.username}</h2>
          </div>

          <div
            className=" flex items-center whitespace-nowrap gap-2 rounded-lg p-2 text-sm text-muted-foreground  hover:bg-accent hover:text-primary"
            role="menuitem">
            <MailCheck size={20} />
            <h2>{user?.userData?.email}</h2>
          </div>
          <div
            className=" flex items-center whitespace-nowrap gap-2 rounded-lg p-2 text-sm text-muted-foreground  hover:bg-accent hover:text-primary"
            role="menuitem">
            <PhoneCall size={20} />
            <h2>{user?.userData?.phone}</h2>
          </div>
        </div>

        <div className="p-2">
          <form action="#">
            <button
              onClick={logOutFunc}
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300"
              role="menuitem">
              تسجيل الخروج
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
