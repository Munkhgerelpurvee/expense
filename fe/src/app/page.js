"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/components/context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { Container } from "../components/Container";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [amount, setAmount] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/api/accounts");
      setAccounts(response.data);

      // console.log(response.data);
    };
    getData();
  }, []);

  console.log(accounts);
  //

  const createAccount = async () => {
    const newAccount = {
      title,
      amount,
    };
    const response = await axios.post(
      "http://localhost:3001/api/accounts",
      newAccount
    );

    setAccounts([...accounts, response.data]);
  };

  // useContext дээр ашиглах value-гаа оруулж ирнэ.
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);

  return (
    <>
      <div className="flex justify-center gap-4 m-4">
        <Button className="bg-[#0166FF] font-normal text-base">+ Record</Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Container>
        <main className="flex items-center justify-between min-h-screen p-24">
          <div className="ml-10 bg-yellow-400">
            <h1 className="bg-pink-400">Account</h1>
            <ul>
              {accounts.map((account, index) => {
                return (
                  <li key={index}>
                    {account.title}: {account.amount}
                  </li>
                );
              })}
            </ul>
          </div>

          {/*  useContext ашиглаж үзэх хэсэг */}

          <div>
            <p>Welcome to useContext</p>
            <div className="grid items-center grid-cols-1 gap-4 mt-4">
              <Label className="text-[gray] font-light" htmlFor="r1">
                firstName
              </Label>
              <Input
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Write your name"
                className="col-span-4 p-8 border rounded-lg"
                onChange={(event) => {
                  setUserInfo({ ...userInfo, firstName: event.target.value });
                }}
              />

              <Label className="text-[gray] font-light" htmlFor="r1">
                lastName
              </Label>
              <Input
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Write your lastName"
                className="col-span-4 p-8 border rounded-lg"
                onChange={(event) => {
                  setUserInfo({ ...userInfo, lastName: event.target.value });
                }}
              />

              <Link
                href="/login"
                className="p-1 mt-4 font-bold text-center bg-blue-600 rounded-full "
              >
                Login
              </Link>
            </div>
          </div>

          {/* useContext ашиглаж үзэх хэсэг END  */}
          <div>
            <div>
              <div className="text-[gray] font-light">Amount</div>
              <input
                value={amount}
                type="number"
                placeholder="₮ 000.00"
                className="col-span-4 p-8 mb-10 border rounded-lg"
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </div>

            <div>
              <div className="text-[gray] font-light">Title</div>
              <input
                value={title}
                type="text"
                placeholder="₮ 000.00"
                className="col-span-4 p-8 mb-5 border rounded-lg"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <Button
              onClick={createAccount}
              className="text-[#1F2937] hover:text-[#fff] bg-[#0166FF] font-bold  text-base rounded-full "
            >
              + Create
            </Button>
            {/* <button onClick={createAccount}>Create</button> */}
          </div>
        </main>
      </Container>
    </>
  );
}
