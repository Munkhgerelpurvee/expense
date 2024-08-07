"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
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
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2";
import { IconCategory } from "./Icon-category";

export default function AddCategory() {
  const icon = {
    home1: FaHouse,
    home2: PiHouseLineFill,
    IdentificationBadge: PiIdentificationBadgeFill,
    IdentificationCard: PiIdentificationCardFill,
    Ladder: PiLadderBold,
    IntersectSquare: PiIntersectSquareFill,
    ImageSquare: PiImageSquareFill,
    MagnifyingGlassPlus: PiMagnifyingGlassPlusFill,
    Microphone: BiSolidMicrophone,
    MicrosoftExcelLogo: PiMicrosoftExcelLogoFill,
    Notepad: PiNotepadFill,
    ListPlus: PiListPlusBold,
    Leaf: FaLeaf,
    NumberFive: PiNumberFiveFill,
    NumberCircleSeven: PiNumberCircleSevenFill,
    RoadHorizon: PiRoadHorizonFill,
    HourglassSimpleMedium: PiHourglassSimpleMediumFill,
    AnchorSimple: PiAnchorSimpleFill,
    BezierCurve: PiBezierCurveFill,
    Exclude: PiExcludeFill,
    Vignette: PiVignetteFill,
    Baseball: IoIosBaseball,
    Question: BsFillQuestionCircleFill,
    Exam: PiExamFill,
    Watch: PiWatchFill,
    GlobeSimple: PiGlobeSimpleFill,
    OrangeSlice: PiOrangeSliceFill,
    Peace: PiPeaceFill,
    ToiletPaper: PiToiletPaperFill,
    Pencil: PiPencilLineFill,
    HiOutlinePhoneArrowDownLeft: HiOutlinePhoneArrowDownLeft,
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
      img: "IdentificationCard",
    },
    {
      img: "Ladder",
    },
    {
      img: "ImageSquare",
    },
    {
      img: "MagnifyingGlassPlus",
    },
    {
      img: "Microphone",
    },
    {
      img: "MicrosoftExcelLogo",
    },
    {
      img: "Notepad",
    },
    {
      img: "ListPlus",
    },
    {
      img: "Leaf",
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
      img: "AnchorSimple",
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
      img: "Pencil",
    },
    {
      img: "HiOutlinePhoneArrowDownLeft",
    },
  ];

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <div className="flex items-center gap-4">
                <AiFillPlusCircle className="text-blue-700" />
                Add Category
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
            </DialogHeader>

            <div className="flex gap-6">
              <Select className="">
                <SelectTrigger className="w-[aspec2/1] mt-4 ">
                  <SelectValue
                    placeholder=""
                    // defaultValue={<FaHouse />}
                  />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup className="grid grid-cols-6 w-[450px] h-[250px] mb-4">
                    {/* Now working here 07.29 */}
                    {/* <SelectLabel>
                      <button>
                        <AddCategory />
                      </button>
                    </SelectLabel> */}

                    {categoryData.map((el, index) => {
                      const IconComponent = icon[el.img];

                      return (
                        <SelectItem key={el.index} value={el.img}>
                          <div className="flex items-center gap-4">
                            <IconComponent className="w-5 h-5" />

                            <p>{el.name}</p>
                          </div>
                        </SelectItem>
                      );
                    })}
                    {/* <IconCategory
                      categoryIcon={categoryIcon}
                      setCategoryIcon={setCategoryIcon}
                    /> */}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="gap-4 py-4">
                {/*  Name is here  */}
                <div className="relative flex items-center w-full gap-4">
                  <Input
                    id="name"
                    value=""
                    placeholder="Name"
                    className="relative col-span-9"
                  />
                  <RiArrowDownSFill className="absolute" />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button className="bg-[#16A34A] min-w-full" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
