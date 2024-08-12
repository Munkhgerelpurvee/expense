"use client";
// import from default
import * as React from "react";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import from ui
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import from component & CONTEXT

import { CategoryContext } from "./CategoryContext";
import Categories from "./Categories";

export default function AddCategory123({IconCat,setIconCat}) {
  // const { categoryInfo, setCategoryInfo, createCategory } =
  //   useContext(CategoryContext);
  // log hiihed console deer orj irj bna
  //   console.log(CategoryInfo);

  // CategoryContext-c ашиглах value-гаа оруулж ирнэ.
  const {
    CategoryInfo,
    setCategoryInfo,
    createCategory,
    categories,
    setCategories,
    categoryName,
    setCategoryName,
    iconName,
    setIconName,
    selectedColor,
    setSelectedColor,
  } = useContext(CategoryContext);
  //Category орж ирж байгаа эсэхийг байнга log хийж шалгах
  console.log("-AddCategory123- Res.Data --", Categories);

  return (
    <>
      <div className="flex px-4 mt-2 ">
        {/*  */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-[#1F2937] hover:text-[#fff] bg-[#E5E7EB] font-normal  text-base rounded-full ">
              + Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Category with icon & color</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center gap-4 ">
            <IconCategoty/>
              <div className="flex items-center gap-4">
                <Input
                  id="name"
                  type="text"
                  value={categoryName}
                  placeholder="Write Categoty Name"
                  className="col-span-3"
                  onChange={(event) => {
                    setCategoryName(event.target.value);
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => createCategory()}
                className="bg-[#16A34A] min-w-full"
                type="submit"
              >
                Save changes to AddCategory with icon & color
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
