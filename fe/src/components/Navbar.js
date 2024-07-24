import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";


  import { Button } from "@/components/ui/button";


export default function Navbar () {
    return (
        <div>

<main className="flex flex-col items-center justify-between min-h-screen p-4">

<div className="flex gap-4">

<Button className="bg-[#0166FF] font-normal text-base">+ Record</Button>
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>


  </main>


        </div>

    )
}