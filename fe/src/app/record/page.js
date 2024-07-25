import Navbar from "../../components/Navbar";
import Categories  from "../../components/Categories";
import Food  from "../../components/Food";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input";







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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Record</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button  className="bg-[#0166FF] w-full rounded-full"  type="submit">Add Record</Button>
        </DialogFooter>
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
