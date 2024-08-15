"use client";
import { useContext } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { AccountTransitionCheckbox } from "./AccountTransitionCheckbox";

//
import { AccountContext } from "@/components/AccountContext";
export const Accounts = () => {
  const { accounts } = useContext(AccountContext);
  return (
    <>
      <main></main>
      <div>
        <div className="flex-1 bg-[#D1D5DB] border-gray-300 px-10 py-10 mb-4">
          Last 30 Days
          <div className="flex justify-between bg-[#fff] rounded-lg p-2 ">
            <div className="flex items-center gap-4 ">
              <Checkbox />
              <Label className="text-[gray] font-light" htmlFor="r1">
                Select all
              </Label>
            </div>
          </div>
          <h1 className="mb-4 text-[#1F2937] text-base font-semibold">Today</h1>
          {/* Backend mapping */}
          <div className="mb-10">
            {accounts.map((accountEl, index) => {
              return (
                <AccountTransitionCheckbox
                  key={index}
                  accountTrans={accountEl}
                />
              );
            })}
          </div>
          {/* Backend mapping */}
        </div>
        <h1 className="mb-4 text-[#1F2937] text-base font-semibold">
          Yesterday
        </h1>
      </div>
    </>
  );
};
