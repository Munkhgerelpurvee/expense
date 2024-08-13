"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/components/context";
import { CategoryContextProvider } from "@/components/CategoryContext";
import { AccountContextProvider } from "@/components/AccountContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AccountContextProvider>
        <CategoryContextProvider>
          <UserContextProvider>
            <body className={inter.className}>{children}</body>
          </UserContextProvider>
        </CategoryContextProvider>
      </AccountContextProvider>
    </html>
  );
}
