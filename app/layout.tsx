import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header"
import Setting from "@/components/setting/Setting";
import Theme from "@/components/other/Theme";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dua Ruqyah",
  description: "Application of IRD Foundation",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {

  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={`${inter.className} bg-bg`}>
        <Theme/>
        <div className="relative h-[100vh] p-[1.5rem] px-[2.5rem] max-2xl:px-[1.5rem] flex gap-6 max-2xl:gap-2 max-md:px-1 max-sm:pt-4">
          <Sidebar />
          <div className="flex-grow">
            <Header />
            <div className="flex gap-4 max-2xl:gap-0">
              <div className="flex-grow sidebar-thin h-[calc(100vh-110px)] overflow-y-auto px-2 max-xl:h-[calc(100vh-110px)] max-xl:pb-10 max-xl:pt-[80px] max-md:pt-[1rem]">
                {children}
              </div>
              <Setting />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
