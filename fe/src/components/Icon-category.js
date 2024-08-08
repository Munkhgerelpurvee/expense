"use-client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "./CategoryContext";

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
import { IoGift } from "react-icons/io5";
import { PiForkKnifeDuotone } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { PiTShirtFill } from "react-icons/pi";

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

const iconDatas = [
  { icon: IoGift, label: "IoGift" },
  { icon: PiForkKnifeDuotone, label: "PiForkKnifeDuotone" },
  { icon: PiWineFill, label: "PiWineFill" },
  { icon: BsFillTaxiFrontFill, label: "BsFillTaxiFrontFill" },
  { icon: PiTShirtFill, label: "PiTShirtFill" },
  { icon: FaHouse, label: "FaHouse" },
  { icon: PiHouseLineFill, label: "PiHouseLineFill" },
  { icon: PiIdentificationBadgeFill, label: "PiIdentificationBadgeFill" },
  { icon: PiIdentificationCardFill, label: "PiIdentificationCardFill" },
  { icon: PiLadderBold, label: "PiLadderBold" },
  { icon: PiIntersectSquareFill, label: "PiIntersectSquareFill" },
  { icon: PiImageSquareFill, label: "PiImageSquareFill" },
  { icon: PiMagnifyingGlassPlusFill, label: "PiMagnifyingGlassPlusFill" },
  { icon: BiSolidMicrophone, label: "BiSolidMicrophone" },
  { icon: PiMicrosoftExcelLogoFill, label: "PiMicrosoftExcelLogoFill" },
  { icon: PiNotepadFill, label: "PiNotepadFill" },
  { icon: PiListPlusBold, label: "PiListPlusBold" },
  { icon: FaLeaf, lebel: "FaLeaf" },
  { icon: PiNumberFiveFill, label: "PiNumberFiveFill" },
  { icon: PiNumberCircleSevenFill, label: "PiNumberCircleSevenFill" },
  { icon: PiRoadHorizonFill, label: "PiRoadHorizonFill" },
  { icon: PiHourglassSimpleMediumFill, label: "PiHourglassSimpleMediumFill" },
  { icon: PiAnchorSimpleFill, label: "PiAnchorSimpleFill" },
  { icon: PiBezierCurveFill, label: "PiBezierCurveFill" },
  { icon: PiExcludeFill, label: "PiExcludeFill" },
  { icon: PiVignetteFill, label: "PiVignetteFill" },
  { icon: IoIosBaseball, label: "IoIosBaseball" },
  { icon: BsFillQuestionCircleFill, label: "BsFillQuestionCircleFill" },
  { icon: PiExamFill, label: "PiExamFill" },
  { icon: PiWatchFill, label: "PiWatchFill" },
  { icon: PiGlobeSimpleFill, label: "PiGlobeSimpleFill" },
  { icon: PiOrangeSliceFill, label: "PiOrangeSliceFill" },
  { icon: PiPeaceFill, label: "PiPeaceFill" },
  { icon: PiToiletPaperFill, label: "PiToiletPaperFill" },
  { icon: PiPencilLineFill, label: "PiPencilLineFill" },
  { icon: HiOutlinePhoneArrowDownLeft, label: "HiOutlinePhoneArrowDownLeft" },
];

const colors = [
  "#23E01F",
  "#EC4899",
  "#374151",
  "#FABE22",
  "#3ABEF7",
  "#F54949",
  "#0166FF",
];

export const IconCategory = () => {
  const [selectedColor, setSelectedColor] = useState("");
  // CategoryContext-c ашиглах value-гаа оруулж ирнэ.
  const { categoryInfo, color, setCategoryInfo } = useContext(CategoryContext);

  return (
    <Select
      defaultValue={iconDatas[0]}
      onValueChange={(value) =>
        setCategoryInfo({ ...categoryInfo, iconName: value })
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={<FaHouse />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-6 w-[450px] h-[250px] mb-4">
              {/* <SelectLabel>Icons</SelectLabel> */}
              {iconDatas.map((el, index) => {
                const IconComponent = el.icon;
                return (
                  <SelectItem key={index} value={el.label} className="m-auto">
                    <IconComponent
                      style={{ color: selectedColor }}
                      className="w-5 h-5"
                    />
                  </SelectItem>
                );
              })}
            </div>

            <div className="flex  justify-between border-t-2 border-t-[#D1D5DB] w-full h-full p-6">
              {colors.map((item, index) => (
                <div
                  key={index}
                  style={{ background: item }}
                  className="w-6 h-6 rounded-full"
                  onClick={() => setSelectedColor(item)}
                ></div>
              ))}
            </div>
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
