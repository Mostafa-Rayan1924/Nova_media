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
      url: "/HeadLogo.png",
      href: "/HeadLogo.png",
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="ar">
      <head>
        <meta property="og:image" content="https://novamedia-eg.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="preload" as="image" href="/share2.png" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
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
