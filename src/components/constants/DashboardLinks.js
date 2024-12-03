import {
  Instagram,
  LucideBookImage,
  ServerCrash,
  ShoppingBasketIcon,
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
    id: 5,
    icon: <ServerCrash size={20} />,
    title: "الخدمات",
    path: "/dashboard/services",
  },

  {
    id: 5,
    icon: <ShoppingBasketIcon size={20} />,
    title: "المتجر",
    path: "/dashboard/market",
  },
];
