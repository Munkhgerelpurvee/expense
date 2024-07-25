import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";




export default function Food() {
  const data = [

    {   title: <Checkbox/>,
        src : "/images/Group 8.jpg",
        name: "Lending & Renting",
        price: "-35,500₮",


     },

     {   title: <Checkbox/>,
        src : "/images/Group 8 (1).jpg",
        name: "Food & Drinks",
        price: "-1,000₮",


     },
     {   title: <Checkbox/>,
        src : "/images/Group 8 (1).jpg",
        name: "Food & Drinks",
        price: "-1,000₮",


     },
     {   title: <Checkbox/>,
        src : "/images/Group 8 (1).jpg",
        name: "Food & Drinks",
        price: "-1,000₮",


     },
     {   title: <Checkbox/>,
        src : "/images/Group 8 (1).jpg",
        name: "Food & Drinks",
        price: "-1,000₮",


     },
 

  ];

  return (
    <div className="gap-4">
      {data.map((el, index) => {
        return (
          <div>
            <Card key={index} card={el} />
          </div>
        );
      })}
    </div>
  );
}


const Card = ({ card }) => {
  return (

    <>
<div className="flex justify-between bg-[#fff] rounded-lg p-2 mb-4">

     <div className="flex items-center gap-4">
           {card.title}
       <Image
      src={card.src}
      alt="Logo"
      className="dark:invert"
      width={25}
      height={20}
      
    />
  
    <div  className="text-[gray] font-light text-xs" htmlFor="r1">{card.name}</div>


     </div>

    <div className="flex items-center">
       <p className="text-[#23E01F] text-[10px] ">{card.price}</p>
    </div>


</div>
    </>

  );
};
