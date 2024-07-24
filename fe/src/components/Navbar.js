import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div>
      <main className="flex justify-between p-4 border shadow-lg">


        <div className="flex items-center gap-4">

       
       
          <Image
            src="/images/Vector.svg"
            alt="Vecvor Logo"
            className="dark:invert"
            width={27}
            height={27}
          />
    

          <p className=" text-[#0F172A] text-base font-normal " >Dashboard</p>
          <p className=" text-[#0F172A] text-base font-semibold " >Records</p>
          

        
        </div>

        <div className="flex gap-4 ">
          <Button className="bg-[#0166FF] font-normal text-base">
            + Record
          </Button>
          <Avatar>
            <AvatarImage src="/images/Placeholder.svg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </main>
    </div>
  );
}
