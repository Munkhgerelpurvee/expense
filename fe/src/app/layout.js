"use context";

import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/components/context";
import { CategoryContextProvider } from "@/components/CategoryContext";
// import { AccountContextProvider } from "@/components/AccountContext";
import { AuthContextProvider } from "@/components/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
      {/* <AccountContextProvider> */}
        <CategoryContextProvider>
          <UserContextProvider>
            <body className={inter.className}>{children}
            <ToastContainer />
            </body>
          </UserContextProvider>
        </CategoryContextProvider>
      {/* </AccountContextProvider> */}

      </AuthContextProvider>
    </html>
  );
}
