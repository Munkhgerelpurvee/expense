
'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button"
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
import { AiFillPlusCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
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
// import {IconCategory} from "./IconCategory";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { FaHouse } from "react-icons/fa6";
import { PiHouseLineFill } from "react-icons/pi";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { PiIdentificationCardFill } from "react-icons/pi";
import { PiLadderBold } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { PiImageSquareFill } from "react-icons/pi";
import { PiMagnifyingGlassPlusFill } from "react-icons/pi";
import { BiSolidMicrophone } from "react-icons/bi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { PiNotepadFill } from "react-icons/pi";
import { PiListPlusBold } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { PiHourglassSimpleMediumFill } from "react-icons/pi";
import { PiAnchorSimpleFill } from "react-icons/pi";
import { PiBezierCurveFill } from "react-icons/pi";
import { PiExcludeFill } from "react-icons/pi";
import { PiVignetteFill } from "react-icons/pi";
import { IoIosBaseball } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { PiExamFill } from "react-icons/pi";
import { PiWatchFill } from "react-icons/pi";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { PiOrangeSliceFill } from "react-icons/pi";
import { PiPeaceFill } from "react-icons/pi";
import { PiToiletPaperFill } from "react-icons/pi";
import { PiPencilLineFill } from "react-icons/pi";





export const AddCategory = () => {
  const icon = {

    home1: FaHouse,
    home2:PiHouseLineFill, 
    IdentificationBadge: PiIdentificationBadgeFill ,
    IdentificationCard:PiIdentificationCardFill,
    Ladder:PiLadderBold,
    IntersectSquare:PiIntersectSquareFill,
    ImageSquare:PiImageSquareFill,
    MagnifyingGlassPlus:PiMagnifyingGlassPlusFill,
    Microphone:BiSolidMicrophone,
    MicrosoftExcelLogo:PiMicrosoftExcelLogoFill,
    Notepad:PiNotepadFill,
    ListPlus:PiListPlusBold,
    Leaf:FaLeaf,
    NumberFive:PiNumberFiveFill,
    NumberCircleSeven:PiNumberCircleSevenFill,
    RoadHorizon:PiRoadHorizonFill,
    HourglassSimpleMedium:PiHourglassSimpleMediumFill,
    AnchorSimple:PiAnchorSimpleFill,
    BezierCurve:PiBezierCurveFill,
    Exclude:PiExcludeFill ,
    Vignette:PiVignetteFill,
    Baseball:IoIosBaseball,
    Question:BsFillQuestionCircleFill,
    Exam:PiExamFill,
    Watch:PiWatchFill ,
    GlobeSimple:PiGlobeSimpleFill,
    OrangeSlice:PiOrangeSliceFill,
    Peace:PiPeaceFill,
    ToiletPaper:PiToiletPaperFill,
    Pencil: PiPencilLineFill,


};

const categoryData = [
  {
    img: "home1",
  
  },
  {
    img: "home2",
  
  },
  {
    img: "IdentificationBadge",
    
  },
  {
    img: " IdentificationCard",
   
  },
  {
    img: " Ladder",
 
  },
  {
    img: "IntersectSquare",
   
  },
  {
      img: "ImageSquare",
     
    },
    {
      img: "MagnifyingGlassPlus",
     
    },
  {
      img: "  Microphone",
     
    },
    {
      img: "MicrosoftExcelLogo",
     
    },
  {
      img: "  Notepad",
     
    },
    {
      img: "ListPlus",
     
    },
  {
      img: " Leaf",
     
    },
    {
      img: "NumberFive",
     
    },
  {
      img: "NumberCircleSeven",
     
    },
    {
      img: "RoadHorizon",
     
    },
   {
      img: "HourglassSimpleMedium",
  
    },
    {
      img: " AnchorSimple",
     
    },
  {
      img: "BezierCurve",
     
    },
    {
      img: "Exclude",
     
    },
  {
      img: "Vignette",
     
    },
    {
      img: "Baseball",
     
    },
  {
      img: "Question",
     
    },
    {
      img: "Exam",
     
    },
  {
      img: "Watch",
     
    },
    {
      img: "GlobeSimple",
     
    },
  {
      img: "OrangeSlice",
     
    },
    {
      img: "Peace",
     
    },
  {
      img: "ToiletPaper",
   
     
    },
    {
      img: " Pencil",
     
    },
];
    return (
<>
<Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" >
            <div className="flex items-center gap-4">
        {/* <Image
      src={"/images/Vector(1).jpg"}
      alt="Logo"
      className="dark:invert"
      width={25}
      height={20}
      
    /> */}

<AiFillPlusCircle className="text-blue-700" />


            Add Category

            </div>
    
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 grid-flow-row">

          {/*  */}

        <div className="flex flex-1 border border-solid border-[gray]">
                    <NavigationMenu>
                    
                        <NavigationMenuItem>
                          <div className="flex flex-col">
                           
                            <NavigationMenuTrigger className="w-full bg-[#630625] mt-4">
                              <FaHouse />
                            </NavigationMenuTrigger>
                          </div> 
                        
                          <NavigationMenuContent>

                          {categoryData.map((el, index) => {
                                const IconComponent = icon[el.img];

                                return (
                                 
                                    <div key={index}  className="flex items-center gap-4">
                                      <IconComponent className="w-5 h-5" />
                                  
                                    </div>
                                  
                                );
                              })}
                            
                                 
                         
                    
                            
                            
                           
                      
                            
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                    
                    </NavigationMenu>
                  </div>
          {/*  Name is here  */}
          <div className="relative flex items-center gap-4">
           
            <Input id="name" value=""  placeholder="Name" className="relative col-span-5" />
            <RiArrowDownSFill className="absolute"/>
            
          </div>
         
        </div>
        <DialogFooter>
          <Button  className = "bg-[#16A34A] min-w-full"type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


</>

    )
}