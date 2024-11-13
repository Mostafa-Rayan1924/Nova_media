import Navbar from "@/components/reusable/navigation/Navbar";
import "./globals.css";
import { Almarai } from "next/font/google";
import { ThemeProvider } from "@/components/reusable/navigation/theme-provider";
const CairoPlay = Almarai({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "",
  description: "",
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
      <body className={`${CairoPlay.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
