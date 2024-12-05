import {
  BriefcaseBusiness,
  Images,
  Instagram,
  LucideBookImage,
  ServerCrash,
  ShoppingBasketIcon,
  SquareDashedMousePointer,
  User2,
  UserCheck2Icon,
} from "lucide-react";

export let dashboardLinks = [
  // home links
  {
    id: 1,
    title: "البانرات",
    icon: <LucideBookImage size={20} />,
    path: "/dashboard/banners",
  },
  {
    id: 2,
    icon: <UserCheck2Icon size={20} />,
    title: "عملائنا",
    path: "/dashboard/our-clients",
  },
  {
    id: 3,
    icon: <Instagram size={20} />,
    title: "مشاريع انستجرام",
    path: "/dashboard/instProjects",
  },
  {
    id: 4,
    icon: <ServerCrash size={20} />,
    title: "الخدمات",
    path: "/dashboard/services",
  },
  {
    id: 5,
    icon: <User2 size={20} />,
    title: "الفريق",
    path: "/dashboard/team",
  },
  {
    id: 6,
    icon: <Images size={20} />,
    title: "المعارض",
    path: "/dashboard/exhibtions",
  },
  {
    id: 7,
    icon: <BriefcaseBusiness size={20} />,
    title: "اعلان توظيف",
    path: "/dashboard/job-ads",
  },
  {
    id: 8,
    icon: <SquareDashedMousePointer size={20} />,
    title: "اعلان للموقع",
    path: "/dashboard/site-ads",
  },
  {
    id: 9,
    icon: <ShoppingBasketIcon size={20} />,
    title: "المتجر",
    path: "/dashboard/market",
  },
];
