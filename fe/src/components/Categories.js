import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Categories() {
  const categories = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertainment" },
    { name: "Communication, PC" },
    { name: "Financial expenses" },
    { name: "Investments" },
    { name: "Investments" },
    { name: "Others" },
  ];

  return (
    <div className="gap-4">
      {categories.map((el, index) => {
        return (
          <div>
            <Card key={index} cardElement={el} />
          </div>
        );
      })}
    </div>
  );
}

const Card = ({ cardElement }) => {
  return (

    <>
    <div className="flex items-center gap-6">
      <div className="">
        <Image
          src="/images/Union.svg"
          alt="Vecvor Logo"
          className="dark:invert"
          width={17}
          height={17}
        />
      </div>

      <div className="text-[#1F2937] text-center font-light text-base">{cardElement.name}</div>

      <div>
        <Image
          src="/images/arrow_drop_down.svg"
          alt="Vecvor Logo"
          className="dark:invert"
          width={7}
          height={7}
        />
      </div>
    </div>

 
    
    </>

    


  );
};
