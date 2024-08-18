"use client";
import { api } from "../lib/axios";
import { useState, createContext, useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

// эхлээд user-ийн мэдээлэл хадгалах context үүсгэнэ
const authPaths = ["/Log-in", "/register"];
export const AuthContext = createContext();

// AuthContext- iig Provider hiih component hiine
export const AuthContextProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
//login 
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/Log-in", { email, password });

      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);

      router.replace("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const register = async (username, email, password) => {
    try {
      await api.post("/auth/register", {
        username,
        email,
        password,
      });

      router.push("/Log-in");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem("token");

        if (!token) return;

        const res = await api.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
        toast.error("Your session has expired. Please login again.");
      } finally {
        setIsReady(true);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;

    if (!isReady) return;

    if (!user) router.replace("/Log-in");
  }, [pathname, user, isReady]);

  if (!isReady) return null;

  return (
    // value prop дамжуулах
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
 
 
};

export const useAuth = () => useContext(AuthContext);
