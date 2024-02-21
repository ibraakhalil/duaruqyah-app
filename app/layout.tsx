import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header"
import Setting from "@/components/setting/Setting";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dua Ruqyah",
  description: "Application of IRD Foundation",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className="bg-bg" lang="en">
      <body className={inter.className}>
        <div className="relative h-[100vh] p-[1.5rem] px-[2.5rem] flex gap-4">
          <Sidebar />
          <div className="flex-grow">
            <Header />
            <div className="flex gap-4 max-2xl:gap-0">
              <div className="flex-grow h-[calc(100vh-110px)] overflow-y-auto sidebar-thin px-2">
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
