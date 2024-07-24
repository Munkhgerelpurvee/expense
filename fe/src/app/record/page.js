import Navbar from "../../components/Navbar";
import Categories  from "../../components/Categories";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function Record() {
  
  return (

    <>
      <Navbar />
    
    <main className="flex bg-[#f2f4f6] items-center justify-between min-h-screen p-16 gap-24 ">
    <div className="flex-2 bg-[#E5E7EB] text-[#1F2937]">Records

    <div className="flex flex-col gap-4 p-4">

          <p className="text-2xl font-semibold 
          text-[#000]">Records</p>
          <Button className="bg-[#0166FF] text-[#fff] font-extralight text-base px-28 rounded-full">
            + Add
          </Button>
         
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


        <div className="flex p-4">
          <div>
        <Image
            src="/images/Union.svg"
            alt="Vecvor Logo"
            className="dark:invert"
            width={17}
            height={17}
          />
          </div>

          <div>
          <Categories/>

          </div>

           <div>
          <Image
            src="/images/arrow_drop_down.svg"
            alt="Vecvor Logo"
            className="dark:invert"
            width={17}
            height={17}
          />
           </div>


        </div>



    </div>
      <div className="flex-1 bg-[#D1D5DB] border-gray-300">Last 30 Days</div>

     
    </main>
    </>

  );
}
