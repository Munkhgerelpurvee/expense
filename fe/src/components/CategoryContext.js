"use client";

import { useState, createContext, useEffect } from "react";
import axios from "axios";

// эхлээд Category-ийн мэдээлэл хадгалах context үүсгэнэ
export const CategoryContext = createContext(null);

// categoryContext- iig Provider hiih component hiine
export const CategoryContextProvider = ({ children }) => {
  // Ямар утга явуулахаа State-ээр зарлаж өгнө
  const [categories, setCategories] = useState([]);

  // // All Category авах
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/api/categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      setCategories(response.data);
      // console.log("-CategoryContext-All Data here- Res.Data --", response.data);
    };
    getData();
  }, []);

  // Ямар утга явуулахаа State-ээр зарлаж өгнө
  const [iconName, setIconName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // newCategory  үүсгэх
  const createCategory = async () => {
    try {
      const newCategory = {
        categoryName,
        iconName,
        selectedColor,
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
    }
  };

  return (
    // value prop дамжуулах
    <CategoryContext.Provider
      value={{
        createCategory,
        categories,
        setCategories,
        categoryName,
        setCategoryName,
        iconName,
        setIconName,

        selectedColor,
        setSelectedColor,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
