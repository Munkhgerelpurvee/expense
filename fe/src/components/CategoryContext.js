"use client";

import { useState, createContext, useEffect } from "react";
import axios from "axios";

// эхлээд Category-ийн мэдээлэл хадгалах context үүсгэнэ
export const CategoryContext = createContext(null);

// categoryContext- iig Provider hiih component hiine
export const CategoryContextProvider = ({ children }) => {
  // Ямар утга явуулахаа зарлаж өгнө
  const [categoryInfo, setCategoryInfo] = useState([]);

  // //  State зарлах
  const [categories, setCategories] = useState([]);
  const [iconName, setIconName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [color, setColor] = useState("");
  // newCategory  үүсгэх
  const createCategory = async () => {
    try {
      const newCategory = {
        categoryName,
        iconName,
        color,
      };
      //  Context-n newCategory орж ирж байгаа эсэхийг байнга log хийж шалгах
      console.log("-CategoryContext- Res.Data --", newCategory);

      const response = await axios.post(
        "http://localhost:3001/api/categories",
        newCategory
      );

      setCategories([...categories, response.data]);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Internal server error" });
    }
  };

  return (
    // value prop дамжуулах
    <CategoryContext.Provider
      value={{
        categoryInfo,
        setCategoryInfo,
        createCategory,
        categories,
        setCategories,
        categoryName,
        setCategoryName,
        iconName,
        setIconName,

        color,
        setColor,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
