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
import { CategoryContext } from "@/components/CategoryContext";

export default function AddCategory123() {
  const { categoryInfo, setCategoryInfo, createCategory } =
    useContext(CategoryContext);
  // log hiihed console deer orj irj bna
  //   console.log(CategoryInfo);
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
              <DialogTitle>Add Category</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center gap-4 ">
              <IconCategory
              // categoryIcon={categoryIcon}
              // setCategoryIcon={setCategoryIcon}
              />
              <div className="flex items-center gap-4">
                <Input
                  id="name"
                  //   value={categoryName}
                  placeholder="Write Categoty Name"
                  className="col-span-3"
                  onChange={(event) => {
                    setCategoryInfo({
                      ...categoryInfo,
                      categoryName: event.target.value,
                    });
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
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
