"use client";
import * as Icons from "react-icons/fa";
// import from default
import * as React from "react";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import from ui
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import from component
import AddCategory123 from "./AddCategory123";

import { CategoryContext } from "@/components/CategoryContext";
import { IconCategory } from "./Icon-category";

export default function AddRecord() {
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
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#0166FF] text-[#fff] font-extralight text-base px-28 rounded-full">
            + Add to AddCategory
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[925px]">
          <DialogHeader className="shadow-md">
            <DialogTitle>Add Record</DialogTitle>
          </DialogHeader>

          <div className="flex gap-4 py-4">
            <div className="flex flex-1 flex-col border border-solid rounded-lg border-[yellow] p-4">
              <div className="grid items-center grid-cols-1 gap-4 mt-4">
                <Label className="text-[gray] font-light" htmlFor="r1">
                  Amount
                </Label>
                <Input
                  value=""
                  type="number"
                  placeholder="₮ 000.00"
                  className="col-span-4 p-2 border rounded-lg"
                  // onChange={(event) => {
                  //   setAmount(event.target.value);
                  // }}
                />
              </div>
              <div className="grid items-center grid-cols-1 gap-4">
                <div className="mt-3">
                  <Select className="">
                    <Label className="text-[gray] font-light " htmlFor="r1">
                      Category
                    </Label>
                    <SelectTrigger className="w-full mt-4">
                      <SelectValue placeholder="Find or choose category" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectGroup className="mb-4">
                        <SelectLabel>
                          <button>
                            <AddCategory123 />
                          </button>
                        </SelectLabel>

                        {/*  Mapping Categories */}
                        <div className="flex">

        
            {/* Энд сонгогдсон icon-ийг гаргаж ирэх */}
            <IconCategory/>

            <div className="items-center gap-4 px-4">
              {categories.map((item, index) => {
                // const Icon = Icons[item.iconName];

                return (
                  <SelectItem key={index} value={item.categoryName}>
                  <div className="flex">
                    <div
                      className="text-[#1F2937] text-center font-light text-base pr-7"
                    >
                      {/* <Icon style={{ item:selectedColor }} className="w-5 h-5"/> */}
                      {item.categoryName}
                    </div>
                  </div>

                  </SelectItem>
                );
              })}
            </div>

                        </div>


                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <DialogFooter className="">
                    <Button
                      className="bg-[#0166FF] w-full rounded-full mt-10"
                      type="submit"
                    >
                      Add Record to amount & category
                    </Button>
                  </DialogFooter>
                </div>
              </div>
            </div>
            <div className="flex flex-1 border border-solid rounded-lg border-[gray] p-4">
              <div className="flex flex-col m-auto">
                <div className="items-center gap-4 mt-4">
                  <Label className="text-[gray] font-light" htmlFor="r1">
                    Payee
                  </Label>
                  <Input
                    value=""
                    type="text"
                    placeholder="Write here"
                    className="col-span-4 p-8 border rounded-lg"
                  />
                </div>
                <div className="items-center gap-4 ">
                  <div className="grid w-full gap-1.5 mt-4">
                    <Label className="text-[gray] font-light" htmlFor="r2">
                      Note
                    </Label>
                    <Textarea
                      className="p-24"
                      placeholder="Write here."
                      id="message"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
