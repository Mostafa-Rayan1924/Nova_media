import Link from "next/link";
import React from "react";
import { dropdownLinks } from "../../constants/dropDownLinks";

const DropDown = ({ open }) => {
  return (
    <div
      className={`absolute right-[34%]    transition-all duration-300 ${
        open ? "top-[80%]" : "top-[-100%]"
      } ${open ? "z-10" : "z-[-10]"} ${
        open ? "opacity-100" : "opacity-0"
      }  mt-0.5 w-56 divide-y  divide-gray-100 bg-background rounded-md border border-border  shadow-lg`}
      role="menu">
      <div className="p-2">
        {dropdownLinks.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.path}
              className="block rounded-lg relative px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
              role="menuitem">
              {item.title}
              {item.soon && (
                <h3 className="absolute left-2 top-1 bg-primary text-[13px] text-white p-1 rounded">
                  قريباً
                </h3>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
