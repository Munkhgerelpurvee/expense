"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import * as Icons from "lucide-react";
import axios from "axios";

//
export const AccountTransitionCheckbox = ({ accountTrans }) => {
  console.log(accountTrans, "==accountTrans==");
  const [categoryData, setCategoryData] = useState({});
  // `http://localhost:3001/api/categories/${accountTrans.categoryId}`
  const getCategory = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/categories/${accountTrans.categoryId}`
    );
    console.log(response.data, "--getCategoryById res.data--");

    setCategoryData(response.data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  const IconComponent = Icons[categoryData?.iconName];

  return (
    <main className="flex items-center justify-between px-6 py-3 mb-3 bg-white rounded-xl">
      <div className="flex items-center gap-4">
        <Checkbox />
        <div
          style={{ backgroundColor: categoryData?.selectedColor }}
          className="flex items-center justify-center w-10 h-10 text-center rounded-full "
        >
          {IconComponent && <IconComponent color="white" size={20} />}
        </div>
        <Label className="text-[gray] font-light" htmlFor="r1">
          {categoryData.categoryName}
        </Label>
      </div>
      <div className="flex items-center">
        <p className="text-[red] text-[10px] ">{accountTrans.amount}</p>
      </div>
    </main>
  );
};
