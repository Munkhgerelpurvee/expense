"use client";
import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";

import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
// Charts

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <div className="flex flex-col w-full h-full gap-6 pt-6 ">
          <div className="w-full h-[220px] flex gap-6">
            {/* begin */}
            <div className="w-1/3 h-full bg-slate-500 rounded-2xl">
              <img src="./images/Large.png" className="w-full h-full" />
            </div>
            {/* end */}
            {/*  begin */}
            <div className="w-1/3 h-full bg-blue-950 rounded-xl">
              {/*  */}
              <div className="w-full h-[56px] p-4 flex justify-start gap-2 items-center border-b-2 border-[#E2E8F0]">
                <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                <h5>Your Income</h5>
              </div>
              {/*  */}
              {/*  */}
              <div className="flex flex-col items-start justify-start w-full p-6 h-fit gap-y-4">
                <div className="flex flex-col items-start justify-start w-full h-fit">
                  <div className="flex items-center justify-start w-full h-fit">
                    <h4 className="text-4xl">1,200,000</h4>
                    <h4 className="text-4xl"> T</h4>
                  </div>
                  <h6 className="text-lg font-normal text-[#64748B]">
                    Your Income Amount
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <FaCircleArrowUp className="text-green-700" />
                  <div className="flex ">
                    <h6 className="text-lg font-normal text-[#000000]">30</h6>
                    <h6 className="text-lg font-normal text-[#000000]">
                      % from last month
                    </h6>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            {/*  */}
            {/* f */}
            <div className="w-1/3 h-full bg-[#23E01F] rounded-xl">
              <div className="w-full h-[56px] p-4 flex justify-start gap-2 items-center border-b-2 border-[#E2E8F0]">
                <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                <h5>Total Expenses</h5>
              </div>
              <div className="flex flex-col items-start justify-start w-full p-6 h-fit gap-y-4">
                <div className="flex flex-col items-start justify-start w-full h-fit">
                  <div className="flex items-center justify-start w-full h-fit">
                    <h4 className="text-4xl">-</h4>
                    <h4 className="text-4xl">1,200,000</h4>
                    <h4 className="text-4xl"> T</h4>
                  </div>
                  <h6 className="text-lg font-normal text-[#64748B]">
                    Your Income Amount
                  </h6>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <FaCircleArrowDown className="text-green-700" />
                  <div className="flex ">
                    <h6 className="text-lg font-normal text-[#000000]">30</h6>
                    <h6 className="text-lg font-normal text-[#000000]">
                      % from last month
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
          {/* begin */}
          <div className="w-full h-[284px] flex gap-6 ">
            <div className="w-1/2 h-full bg-yellow-200 rounded-xl"></div>
            <div className="w-1/2 h-full bg-pink-200 rounded-xl"></div>
          </div>
          {/* end */}
          <div className="w-full h-[456px] bg-blue-200  rounded-xl"></div>
        </div>
      </Container>
    </>
  );
}
