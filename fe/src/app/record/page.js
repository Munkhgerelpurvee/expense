import Navbar from "../../components/Navbar";
import Categories  from "../../components/Categories";
import Food  from "../../components/Food";
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
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"






export default function Record() {
  
  return (

    <>
      <Navbar />
    
    <main className="flex bg-[#f2f4f6] w-full max-w-7xl m-auto items-center justify-between min-h-screen p-16 gap-24">
    <div className="flex-2 bg-[#E5E7EB] text-[#1F2937] rounded-lg">

    <div className="flex flex-col gap-4 p-4">

          <p className="text-2xl font-semibold 
          text-[#000]">Records</p>
          
  <Dialog className="border shadow-lg">
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-[#0166FF] text-[#fff] font-extralight text-base px-28 rounded-full"> + Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader  className="shadow-md">
          <DialogTitle >Add Record</DialogTitle>
          
        </DialogHeader>
        <div className="flex gap-4 py-4">
          <div className="flex flex-2 flex-col border border-solid border-[yellow] p-4">
          <div className="flex gap-6">
        <Button  className="bg-[#0166FF] rounded-full flex flex-1 w-full"  type="submit">Expense</Button>
        <Button  className="rounded-full flex flex-1 w-full bg-[#E5E7EB] text-[#1F2937] hover:text-[#fff]"  type="submit">Income</Button>

          </div>
          <div className="grid items-center grid-cols-1 gap-4 ">
            <Input   id="name" value="" placeholder ="₮ 000.00" className="col-span-4 border rounded-lg p-8 mt-4" />
          </div>
          <div className="grid items-center grid-cols-1 gap-4">
            <div className="mt-8">

            <Label className="text-[gray] font-light" htmlFor="r2">Category</Label>
            <Input id="username" value="Choose" className="col-span-4 mb-4 mt-2" />
            <DialogFooter className="mt-6">
            <div className="grid items-center grid-cols-2 gap-4 " >
            <Label className="text-[gray] font-light" htmlFor="r1">Date</Label>
            <Input id="date" value="date" className="col-span-4 mb-4" />
          

            </div>
            <div className="grid items-center grid-cols-2 gap-4" >
            <Label className="text-[gray] font-light" htmlFor="r2">Date</Label>
            <Input id="date" value="date" className="col-span-4 mb-4" />
          

            </div>
         
        </DialogFooter>

        <DialogFooter>
          <Button  className="bg-[#0166FF] w-full rounded-full"  type="submit">Add Record</Button>
        </DialogFooter>
            </div>

          </div>
          </div>

          <div className="flex flex-1 border border-solid border-[gray] p-4">

          

    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <div className="flex flex-col">

        <Label className="text-[gray] font-light mb-2" htmlFor="r2">Payee</Label>
          <NavigationMenuTrigger className="w-full bg-[#E5E7EB]">Write here</NavigationMenuTrigger>

        </div>
        <div className="grid items-center grid-cols-1 gap-4 ">
        <Label className="text-[gray] font-light mt-8" htmlFor="r2">Note</Label>

        <Input   id="name" value="" placeholder ="Write here" className="col-span-4 border rounded-lg p-20 pb" />
          </div>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
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
 

          {/* <Button className="bg-[#0166FF] text-[#fff] font-extralight text-base px-28 rounded-full">
            + Add
          </Button> */}
         
        </div>

       <div className="p-4 ">
        
           <Input type="search" placeholder="Search" />
          
        </div> 


        <div className="p-4">

          <h1 className="mb-4 text-[#1F2937] text-base font-semibold">Types</h1>

        <RadioGroup defaultValue="comfortable" >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label  className="text-[gray] font-light" htmlFor="r1">All</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label className="text-[gray] font-light" htmlFor="r2">Income</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label className="text-[gray] font-light" htmlFor="r3">Expense</Label>
      </div>
       </RadioGroup>


        </div>

          <div className="p-4">
          <h1 className="mb-4 text-[#1F2937] text-base font-semibold">Category</h1>

          <div className="flex px-4">

      
          <Categories/>

         </div>

           <div className="flex px-4 mt-2 ">
            <Button className="text-[#1F2937] hover:text-[#fff] bg-[#E5E7EB] font-normal  text-base rounded-full ">
            + Add Category
            </Button>

        </div>

          </div>

          <div className="p-4">
          <h1 className="mb-4 text-[#1F2937] text-base font-semibold">Amount Range</h1>

          <div className="flex gap-6 text-[#0F172A]">

          <Button  className = "bg-[#f2f4f6] px-7 text-[#0F172A]" type="submit">0</Button>
          <Button className="bg-[#f2f4f6] text-[#0F172A]" type="submit">1000</Button>
          </div >

          <Slider className="mt-6"/>


          </div>
         


    </div>




<>


      <div className="flex-1 bg-[#D1D5DB] border-gray-300 px-20">Last 30 Days

 

       <div className="flex justify-between bg-[#fff] rounded-lg p-2 mb-4">

        <div className="flex items-center gap-4">
        <Checkbox/>
        <Label  className="text-[gray] font-light" htmlFor="r1">Select all</Label>

        </div>
        
        <p className="text-[#94A3B8] text-[10px]">-35,500₮</p>


       </div>

       <h1 className="mb-4 text-[#1F2937] text-base font-semibold">Today</h1>

       <Food/>
       <h1 className="mb-4 text-[#1F2937] text-base font-semibold">Yesterday</h1>
       <Food/>


    



  

      </div>
</>

     
    </main>
    </>

  );
}
