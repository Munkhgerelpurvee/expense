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
    const getData = async () => {
      const response = await axios.get("http://localhost:4000/categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data);
      console.log("-CategoryContext-All Data here- Res.Data --", response.data);
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
        "http://localhost:4000/categories",
        newCategory,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCategories([...categories, response.data]);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  // DELETE Category  үүсгэх
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  const deleteCategory = async () => {
    if (selectedCategoryIds.length > 0) {
      await Promise.all([
        selectedCategoryIds.map((id) =>
          axios.delete(`http://localhost:4000/categories/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        ),
      ]);

      setCategories(
        categories.filter(
          (category) => !selectedCategoryIds.includes(category.id)
        )
      );
      setSelectedCategoryIds([]);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryIds((prevSelectedIds) => {
      // Check if the categoryId is already in the selected array
      if (prevSelectedIds.includes(categoryId)) {
        // If it is, remove it from the array (deselect it)
        return prevSelectedIds.filter((id) => id !== categoryId);
      } else {
        // Otherwise, add it to the array (select it)
        return [...prevSelectedIds, categoryId];
      }
    });
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

        deleteCategory,
        selectedCategoryIds,
        setSelectedCategoryIds,
        handleCategoryClick,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
