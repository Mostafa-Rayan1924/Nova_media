import {
  LucideBookImage,
  ServerCrash,
  ShoppingBasketIcon,
  UserCheck2Icon,
} from "lucide-react";

export let dashboardLinks = [
  {
    id: 1,
    title: "البانرات",
    icon: <LucideBookImage size={20} />,
    path: "/dashboard/banners",
  },
  {
    id: 2,
    icon: <ServerCrash size={20} />,
    title: "الخدمات",
    path: "/dashboard/services",
  },
  {
    id: 3,
    icon: <UserCheck2Icon size={20} />,
    title: "عملائنا",
    path: "/dashboard/our-clients",
  },
  {
    id: 4,
    icon: <ShoppingBasketIcon size={20} />,
    title: "المتجر",
    path: "/dashboard/market",
  },
];
