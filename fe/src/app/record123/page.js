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

// import from component
import { IconCategory } from "@/components/Icon-category";

import Navbar from "../../components/Navbar";
import AddRecord from "@/components/AddRecord";
import { CategoryContext } from "@/components/CategoryContext";

export default function Record123({ categoryIcon, setCategoryIcon, color }) {
  // CategoryContext-c ашиглах value-гаа оруулж ирнэ.
  const { CategoryInfo, setCategoryInfo } = useContext(CategoryContext);
  console.log(CategoryInfo);
  // log hiihed console deer orj irj bna

  //  State зарлах
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [categoryName, setcategoryName] = useState();
  const [iconName, setIconName] = useState();

  // All Category авах
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/api/categories");
      setCategories(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  console.log(categories);

  // newCategory  үүсгэх
  const createCategory = async () => {
    const newCategory = {
      categoryName,
      iconName,
      color,
    };

    // newCategory орж ирж байгаа эсэхийг байнга log хийж шалгах
    console.log("-------", newCategory);

    const response = await axios.post(
      "http://localhost:3001/api/categories",
      newCategory
    );

    setCategories([...categories, response.data]);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="p-3 mt-4 bg-[#ff0145] text-[#fff] rounded-full">
          Hello page record123
        </div>
      </div>
      <main className="flex bg-[#f2f4f6] w-full max-w-7xl m-auto items-center justify-between min-h-screen p-16 gap-24">
        <div>
          <div className="flex-2 bg-[#E5E7EB] text-[#1F2937] rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-2xl font-semibold text-[#000]">Records</p>

              <AddRecord />
            </div>
          </div>

          <div className="px-4 mt-2 ">
            <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
              Category
            </h1>

            {/*  Mapping Categories */}

            <div className="items-center gap-4 px-4">
              {categories.map((el, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="pr-7">
                      <Image
                        src="/images/Union.svg"
                        alt="Vecvor Logo"
                        width={17}
                        height={17}
                      />
                    </div>

                    <div
                      key={index}
                      className="text-[#1F2937] text-center font-light text-base pr-7"
                    >
                      {el.categoryName}
                    </div>

                    <div>
                      <Image
                        src="/images/arrow_drop_down.svg"
                        alt="Vecvor Logo"
                        width={7}
                        height={7}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
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
                    <DialogTitle>Add Category</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center gap-4 ">
                    <IconCategory
                      categoryIcon={categoryIcon}
                      setCategoryIcon={setCategoryIcon}
                    />
                    <div className="flex items-center gap-4">
                      <Input
                        id="name"
                        value={categoryName}
                        placeholder="Write Categoty Name"
                        className="col-span-3"
                        onChange={(event) => {
                          setcategoryName(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={createCategory}
                      className="bg-[#16A34A] min-w-full"
                      type="submit"
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#D1D5DB] border-gray-300 px-10 py-10">
          Last 30 Days
        </div>
      </main>
    </>
  );
}
