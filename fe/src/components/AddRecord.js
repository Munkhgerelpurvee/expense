"use client";
import * as Icons from "lucide-react";
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { AccountContext } from "./AccountContext";

export default function AddRecord({ text }) {
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

  // AccountContext-g oiruulj irne
  const {
    getAccounts,
    createAccount,
    accounts,
    setAccounts,
    amount,
    setAmount,
    categoryId,
    setCategoryId,
    newAccount,
    setNewAccount,
  } = useContext(AccountContext);

  //
  // const [categoryId, setCategoryId] = useState();

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#0166FF] text-[#fff] font-extralight text-base px-28 rounded-full">
            {text}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[925px]">
          <DialogHeader className="shadow-md">
            <DialogTitle>Add Record</DialogTitle>
          </DialogHeader>

          <div className="flex gap-4 py-4">
            <div className="flex flex-1 flex-col border border-solid rounded-lg border-[yellow] p-4">
              <div className="flex gap-6">
                <Tabs
                  defaultValue="account"
                  onValueChange={(value) =>
                    setNewAccount({ ...newAccount, transaction_type: value })
                  }
                  className="w-[400px]"
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      className="bg-[#0166FF] rounded-full "
                      value="EXP"
                    >
                      Expense
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-full bg-[#E5E7EB] text-[#1F2937] hover:text-[#fff]"
                      value="INC"
                    >
                      Income
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="grid items-center grid-cols-1 gap-4 mt-4">
                <Label className="text-[gray] font-light" htmlFor="r1">
                  Amount
                </Label>
                <Input
                  value={amount}
                  type="number"
                  placeholder="₮ 000.00"
                  className="col-span-4 p-2 border rounded-lg"
                  onChange={(event) => {
                    setNewAccount({
                      ...newAccount,
                      amount: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="grid items-center grid-cols-1 gap-4">
                <div className="mt-3">
                  <Select
                    onValueChange={(value) =>
                      setNewAccount({ ...newAccount, categoryId: value })
                    }
                    className=""
                  >
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

                          <div className="items-center gap-4 px-4">
                            {categories.map((item, index) => {
                              const Icon = Icons[item.iconName];

                              // console.log("NAMES", item.iconName);

                              return (
                                <SelectItem key={index} value={item.id}>
                                  <div className="flex gap-4">
                                    <div className="">
                                      <Icon
                                        style={{ color: item.selectedColor }}
                                        // className="w-3 h-3"
                                      />
                                    </div>
                                    <p className="text-[#1F2937] text-center font-light text-base px-4">
                                      {item.categoryName}
                                    </p>
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
                      onClick={createAccount}
                      className="bg-[#0166FF] w-full rounded-full mt-10"
                      type="submit"
                    >
                      Add Record to category
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
                    id="message"
                    type="text"
                    placeholder="Write here"
                    className="col-span-4 p-8 border rounded-lg"
                    onChange={(e) =>
                      setNewAccount({ ...newAccount, payee: e.target.value })
                    }
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
                      onChange={(e) =>
                        setNewAccount({ ...newAccount, note: e.target.value })
                      }
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
