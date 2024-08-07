"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/components/context";
import { CategoryContextProvider } from "@/components/CategoryContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CategoryContextProvider>
        <UserContextProvider>
          <body className={inter.className}>{children}</body>
        </UserContextProvider>
      </CategoryContextProvider>
    </html>
  );
}
