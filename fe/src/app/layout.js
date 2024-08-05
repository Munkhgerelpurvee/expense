"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/components/context";
// import { UserContextProvider } from "../components/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserContextProvider>
        <body className={inter.className}>{children}</body>
      </UserContextProvider>
    </html>
  );
}
