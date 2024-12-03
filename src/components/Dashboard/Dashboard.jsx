import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutDashboard } from "lucide-react";
import { dashboardLinks } from "../constants/DashboardLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  let pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <LayoutDashboard size={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className={"border-b border-border pb-4 text-center "}>
            <SheetTitle>مرحبا بك في الداشبورد</SheetTitle>
            <SheetDescription>
              <p className="sm:text-lg text-muted-foreground ">
                مطورين نوفا ميديا يتمنوا لكم يوما سعيد
              </p>
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-2 my-2">
            {dashboardLinks.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={`flex gap-2 hover:bg-accent hover:text-primary ${
                      pathname === item.path ? "bg-accent text-primary" : ""
                    } p-2 rounded-md duration-300 items-center`}>
                    {item.icon}
                    <h3>{item.title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;
