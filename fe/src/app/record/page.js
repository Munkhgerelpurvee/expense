"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Categories from "../../components/Categories";
import Food from "../../components/Food";
import Image from "next/image";

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
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddCategory from "@/components/AddCategory";
import { FaHouse } from "react-icons/fa6";
import { IoGift } from "react-icons/io5";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { PiTShirtFill } from "react-icons/pi";
import { DivideCircleIcon, LogIn } from "lucide-react";

export default function Record() {
  // This is backEnd data

  const iconData = {
    home: FaHouse,
    gift: IoGift,
    food: PiForkKnifeDuotone,
    drink: PiWineFill,
    taxi: BsFillTaxiFrontFill,
    shopping: PiTShirtFill,
  };

  const categoryData = [
    {
      img: "home",
      name: "Home",
      color: "blue",
    },
    {
      img: "gift",
      name: "Gift",
      color: "red",
    },
    {
      img: "food",
      name: "Food",
      color: "#F54949",
    },
    {
      img: "drink",
      name: "Drink",
      color: "#EC4899",
    },
    {
      img: "taxi",
      name: "Taxi",
      color: "#FABE22",
    },
    {
      img: "shopping",
      name: "Shopping",
      color: "#3ABEF7",
    },
  ];

  const [accounts, setAccounts] = useState([]);
  const [amount, setAmount] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/api/accounts");
      setAccounts(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  console.log(accounts);
  //
  const createAccount = async () => {
    const newAccount = {
      title,
      amount,
    };
    // newAccout орж ирж байгаа эсэхийг байнга log хийж шалгах
    console.log("-------", newAccount);
    // new account үүсгэх
    const response = await axios.post(
      "http://localhost:3001/api/accounts",
      newAccount
    );

    setAccounts([...accounts, response.data]);
  };

  // All Category авах
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

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
      title,
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

      <main className="flex bg-[#f2f4f6] w-full max-w-7xl m-auto items-center justify-between min-h-screen p-16 gap-24">
        <div className="flex-2 bg-[#E5E7EB] text-[#1F2937] rounded-lg">
          <div className="flex flex-col gap-4 p-4">
            <p
              className="text-2xl font-semibold 
          text-[#000]"
            >
              Records
            </p>

            <Dialog className="border shadow-lg">
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#0166FF] text-[#fff] font-extralight text-base px-28 rounded-full"
                >
                  {" "}
                  + Add
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[925px]">
                <DialogHeader className="shadow-md">
                  <DialogTitle>Add Record</DialogTitle>
                </DialogHeader>
                <div className="flex gap-4 py-4">
                  <div className="flex flex-1 flex-col border border-solid border-[yellow] p-4">
                    <div className="flex gap-6">
                      <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger
                            className="bg-[#0166FF] rounded-full "
                            value="account"
                          >
                            Expense
                          </TabsTrigger>
                          <TabsTrigger
                            className="rounded-full bg-[#E5E7EB] text-[#1F2937] hover:text-[#fff]"
                            value="password"
                          >
                            Income
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    {/* post хүсэлтээр  post хүсэлтээр   post хүсэлтээр  post хүсэлтээр  */}
                    <div className="grid items-center grid-cols-1 gap-4 mt-4">
                      <Label className="text-[gray] font-light" htmlFor="r1">
                        title
                      </Label>
                      <Input
                        value={title}
                        type="text"
                        placeholder="₮ 000.00"
                        className="col-span-4 p-8 border rounded-lg"
                        onChange={(event) => {
                          setTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="grid items-center grid-cols-1 gap-4 mt-4">
                      <Label className="text-[gray] font-light" htmlFor="r1">
                        Amount
                      </Label>
                      <Input
                        value={amount}
                        type="number"
                        placeholder="₮ 000.00"
                        className="col-span-4 p-8 border rounded-lg"
                        onChange={(event) => {
                          setAmount(event.target.value);
                        }}
                      />
                    </div>
                    {/*right now do this  */}
                    <div className="grid items-center grid-cols-1 gap-4">
                      <div className="mt-3">
                        <Select className="">
                          <Label
                            className="text-[gray] font-light "
                            htmlFor="r1"
                          >
                            Category
                          </Label>
                          <SelectTrigger className="w-full mt-4">
                            <SelectValue placeholder="Find or choose category" />
                          </SelectTrigger>
                          <SelectContent className="">
                            <SelectGroup className="mb-4">
                              {/* Now working here 07.29 */}
                              <SelectLabel>
                                <button>
                                  <AddCategory />
                                </button>
                              </SelectLabel>

                              {categoryData.map((el, index) => {
                                const IconComponent = iconData[el.img];

                                return (
                                  <SelectItem key={index} value={el.name}>
                                    <div className="flex items-center gap-4">
                                      <IconComponent
                                        color={el.color}
                                        className="w-5 h-5"
                                      />

                                      <p>{el.name}</p>
                                    </div>
                                  </SelectItem>
                                );
                              })}
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <DialogFooter className="gap-6 pr-12 mx-auto mt-6">
                          <div className="grid items-center grid-cols-2 gap-4 ">
                            <Label
                              className="text-[gray] font-light"
                              htmlFor="r1"
                            >
                              Date
                            </Label>
                            <Input
                              type="date"
                              id="number"
                              value="number"
                              className="col-span-4 mb-4"
                            />
                          </div>
                          <div className="grid items-center grid-cols-2 gap-4">
                            <Label
                              className="text-[gray] font-light"
                              htmlFor="r2"
                            >
                              Time
                            </Label>
                            <Input
                              type="time"
                              id="number"
                              value="time"
                              className="col-span-4 mb-4"
                            />
                          </div>
                        </DialogFooter>

                        <DialogFooter>
                          {/* working here this button */}
                          <Button
                            onClick={createAccount}
                            className="bg-[#0166FF] w-full rounded-full"
                            type="submit"
                          >
                            Add Record
                          </Button>
                          {/*  working here this button */}
                        </DialogFooter>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 border border-solid border-[gray] p-4">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <div className="flex flex-col">
                            <Label
                              className="text-[gray] font-light"
                              htmlFor="r2"
                            >
                              Payee
                            </Label>
                            <NavigationMenuTrigger className="w-full bg-[#E5E7EB] mt-4">
                              Write here
                            </NavigationMenuTrigger>
                          </div>
                          <div className="grid items-center grid-cols-1 gap-4 ">
                            <div className="grid w-full gap-1.5 mt-4">
                              <Label
                                className="text-[gray] font-light"
                                htmlFor="r2"
                              >
                                Note
                              </Label>
                              <Textarea
                                className="p-24"
                                placeholder="Write here."
                                id="message"
                              />
                            </div>
                          </div>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                                    href="/"
                                  >
                                    {/* <Icons.logo className="w-6 h-6" /> */}
                                    <div className="mt-4 mb-2 text-lg font-medium">
                                      shadcn/ui
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      Beautifully designed components that you
                                      can copy and paste into your apps.
                                      Accessible. Customizable. Open Source.
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="p-4 ">
            <Input type="search" placeholder="Search" />
          </div>

          <div className="p-4">
            <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
              Types
            </h1>

            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label className="text-[gray] font-light" htmlFor="r1">
                  All
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label className="text-[gray] font-light" htmlFor="r2">
                  Income
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label className="text-[gray] font-light" htmlFor="r3">
                  Expense
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="p-4">
            <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
              Category
            </h1>
            {/*  Working here  Working here  Working here Working here */}
            <div className="flex px-4">
              <Categories />
            </div>

            {/* <div className="items-center gap-4">
                       {categories.map((el, index) => {
                         return (
                     <div>
                          <div  key={index}>
                          <Image
                            src="/images/Union.svg"
                            alt="Vecvor Logo"

                            width={17}
                            height={17}
                          />
                        </div>

                       <div  key={index}
                        className="text-[#1F2937] text-center font-light text-base">{el}</div>

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
               </div> */}

            <div className="flex px-4 mt-2 ">
              <Button
                onClick={createCategory}
                className="text-[#1F2937] hover:text-[#fff] bg-[#E5E7EB] font-normal  text-base rounded-full "
              >
                + Add Category
              </Button>
            </div>
          </div>

          <div className="p-4">
            <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
              Amount Range
            </h1>

            <div className="flex gap-6 text-[#0F172A]">
              <Button
                className="bg-[#f2f4f6] px-7 text-[#0F172A]"
                type="submit"
              >
                0
              </Button>
              <Button className="bg-[#f2f4f6] text-[#0F172A]" type="submit">
                1000
              </Button>
            </div>

            <Slider className="mt-6" />
          </div>
        </div>

        {/* Second div */}

        <>
          <div>
            <div className="flex-1 bg-[#D1D5DB] border-gray-300 px-10 py-10">
              Last 30 Days
              <div className="flex justify-between bg-[#fff] rounded-lg p-2 mb-4">
                <div className="flex items-center gap-4">
                  <Checkbox />
                  <Label className="text-[gray] font-light" htmlFor="r1">
                    Select all
                  </Label>
                </div>

                <p className="text-[#94A3B8] text-[10px]">-35,500₮</p>
              </div>
              <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
                Today
              </h1>
              <Food />
              {/* Backend mapping */}
              <div className="mb-10">
                {accounts.map((accountEl, index) => {
                  return (
                    <div className="flex justify-between bg-[#fff] rounded-lg p-2 mb-4">
                      <div className="flex items-center gap-4" key={index}>
                        <Checkbox />
                        <Image
                          src="/images/Group 8 (1).jpg"
                          alt="Logo"
                          className="dark:invert"
                          width={25}
                          height={20}
                        />
                        <div
                          className="text-[gray] font-light text-xs"
                          htmlFor="r1"
                        >
                          {accountEl.title}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-[#23E01F] text-[10px] ">
                          {accountEl.amount}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Backend mapping */}
            </div>
            <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
              Yesterday
            </h1>
            <Food />
          </div>
        </>
      </main>
    </>
  );
}
