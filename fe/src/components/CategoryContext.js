"use client";

import { useState, createContext } from "react";
import axios from "axios";

// эхлээд Category-ийн мэдээлэл хадгалах context үүсгэнэ
export const CategoryContext = createContext(null);

// categoryContext- iig Provider hiih component hiine
export const CategoryContextProvider = ({ children }) => {
  // Ямар утга явуулахаа зарлаж өгнө
  const [categoryInfo, setCategoryInfo] = useState({
    categoryName: "Food",
    iconName: "FaHouse",
    color: "yellow",
  });
  // newCategory  үүсгэх
  const createCategory = async () => {
    const response = await axios.post(
      "http://localhost:3001/api/categories",
      categoryInfo
    );

    console.log(response.data);
  };
  return (
    // value prop дамжуулах
    <CategoryContext.Provider
      value={{ categoryInfo, setCategoryInfo, createCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
