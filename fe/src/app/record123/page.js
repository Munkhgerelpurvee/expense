"use client";
// import from default
import * as Icons from "lucide-react";
import * as React from "react";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

// import from ui
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

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

// import from component
import { Accounts } from "../../components/Accounts";
import { IconCategory } from "@/components/Icon-category";
import { Navbar } from "../../components/Navbar";
import AddRecord from "@/components/AddRecord";
import { CategoryContext } from "@/components/CategoryContext";

export default function Record123({}) {
  const [value, setValue] = useState({
    min: 0,
    max: 100000,
    selectedValue: 100000,
  });
  // CategoryContext-c ашиглах value-гаа оруулж ирнэ.
  const {
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
  // console.log(categories);
  // log hiihed console deer orj irj bna

  //  State зарлах
  // const [categories, setCategories] = useState([]);
  // const [category, setCategory] = useState();
  // const [categoryName, setcategoryName] = useState();
  // const [iconName, setIconName] = useState();
  // const [color, setColor] = useState("");

  // All Category авах
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get("http://localhost:3001/api/categories");
  //     setCategories(response.data);
  //     console.log(response.data);
  //   };
  //   getData();
  // }, []);

  // console.log(categories);

  // newCategory  үүсгэх
  // const createCategory = async () => {
  //   const newCategory = {
  //     categoryName,
  //     iconName,
  //   };

  //   newCategory орж ирж байгаа эсэхийг байнга log хийж шалгах
  //   console.log("-------", newCategory);

  //   const response = await axios.post(
  //     "http://localhost:3001/api/categories",
  //     newCategory
  //   );

  //   setCategories([...categories, response.data]);
  // };

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="p-3 mt-4 bg-[#ff0145] text-[#fff] rounded-full">
          Hello page record123
        </div>
      </div>
      <main className="flex bg-[#f2f4f6] w-full max-w-7xl m-auto items-center justify-between min-h-screen p-16 gap-24">
        <div className="bg-[#E5E7EB] p-4">
          <div className="flex-2 bg-[#E5E7EB] text-[#1F2937] rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-2xl font-semibold text-[#000]">Records</p>
              {/* Энд sidebar-н Add Record - n Dialog гарч ирдэг хэсэг */}
              <AddRecord text="+ Add" />
            </div>
          </div>
          <Input placeholder="Search" className="h-8 p-4 mt-6" />
          <div className="mt-6 space-y-4">
            <p className="-mb-3 font-semibold">Types</p>
            <RadioGroup
              defaultValue="all"
              className="*:text-[#1F2937] space-y-3"
            >
              <div className="flex items-center mt-4 space-x-4">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-4">
                <RadioGroupItem value="income" id="income" />
                <Label htmlFor="income">Income</Label>
              </div>
              <div className="flex items-center space-x-4">
                <RadioGroupItem value="expense" id="expense" />
                <Label htmlFor="expense">Expense</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mt-6 ">
            <div className="flex justify-between mb-4">
              <h1 className=" text-[#1F2937] text-base font-semibold">
                Category
              </h1>

              <button className="px-3 text-[#1F2937] ">Clear</button>
            </div>

            {/*  Mapping Categories */}

            <div className="items-center gap-4">
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
            {/* here */}
            <div className="mt-6 space-y-4">
              <p className="font-semibold">Amount Range</p>
              <div className="flex *:h-12 gap-4">
                <Input
                  onChange={(e) => setValue({ ...value, min: e.target.value })}
                />
                <Input
                  onChange={(e) => setValue({ ...value, max: e.target.value })}
                />
              </div>
              <div className="h-12 space-y-2">
                <Slider
                  onValueChange={(v) => console.log(v)}
                  defaultValue={[value.selectedValue]}
                  min={value.min}
                  max={value.max}
                  step={100}
                />
                <div className="flex justify-between">
                  ß<p>{value.min}</p>
                  <p>{value.max}</p>
                </div>
              </div>
            </div>

            <div className="flex px-4 mt-2 ">
              {/*  */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="text-[#1F2937] hover:text-[#fff] bg-[#E5E7EB] font-normal  text-base rounded-full mt-6">
                    + Add Category TO SIDEBAR
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Category</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center gap-4 ">
                    <IconCategory IconCat={iconName} setIconCat={setIconName} />

                    <div className="flex items-center gap-4 ">
                      <Input
                        id="name"
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
                      onClick={createCategory}
                      className="bg-[#16A34A] min-w-full"
                      type="submit"
                    >
                      Save changes TO SIDEBAR
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#E5E7EB] border-gray-300 px-10 py-10">
          <Accounts />
        </div>
      </main>
    </>
  );
}
