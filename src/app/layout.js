import Navbar from "@/components/reusable/navigation/Navbar";
import "./globals.css";
import { Almarai } from "next/font/google";
import { ThemeProvider } from "@/components/reusable/navigation/theme-provider";
import ReduxProvider from "@/components/reusable/ReduxProvider";
import Footer from "@/components/reusable/Footer";
import ScrollToTop from "@/components/ScrollToTop";
const CairoPlay = Almarai({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "نوفا ميديا",
  description:
    "شركه نوفا ميديا للخدمات الدعايه والاعلان والطباعه الرقمية وتنظيم الفعاليات والمؤتمرات والمعارض ",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html className=" scroll-smooth" lang="ar">
      <body className={`${CairoPlay.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ReduxProvider>
            <Navbar />
            <ScrollToTop />
            {children}
            <Footer />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
