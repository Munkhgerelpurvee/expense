"use client";

import { useState, createContext } from "react";
// эхлээд user-ийн мэдээлэл хадгалах context үүсгэнэ
export const UserContext = createContext(null);

// userContext- iig Provider hiih component hiine
export const UserContextProvider = ({ children }) => {
  // Ямар утга явуулахаа зарлаж өгнө
  const [userInfo, setUserInfo] = useState({
    firstName: "ner",
    lastname: "ovog",
  });
  return (
    // value prop дамжуулах
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
