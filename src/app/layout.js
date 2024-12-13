import Navbar from "@/components/reusable/navigation/Navbar";
import "./globals.css";
import { Almarai } from "next/font/google";
import { ThemeProvider } from "@/components/reusable/navigation/theme-provider";
import ReduxProvider from "@/components/reusable/ReduxProvider";
import Footer from "@/components/reusable/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import DashboardLink from "@/components/DashboardLink";
import Welcome from "@/components/Welcome";
const font = Almarai({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "نوفا ميديا",
  description:
    "شركه نوفا ميديا للخدمات الدعايه والاعلان والطباعه الرقمية وتنظيم الفعاليات والمؤتمرات والمعارض ",
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="ar">
      <body className={`${font.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ReduxProvider>
            <Welcome />
            <Navbar />
            <ScrollToTop />
            <DashboardLink />
            {children}
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
