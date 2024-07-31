"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [amount, setAmount] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/");
        const data = await res.json();

        console.log(data);

        setData(data);
      } catch (error) {
        console.log(console.log(error));
      }
    };

    getData();
  }, []);

  //
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/accounts");
      setAccounts(response.data);

      console.log(response.data);
    };
    getData();
  }, []);

  const createAccount = async () => {
    const newAccount = {
      title,
      amount,
    };
    const response = await axios.post(
      "http://localhost:3001/accounts",
      newAccount
    );

    setAccounts([...accounts, response.data]);
  };

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
          {/*  */}
          <div>
            <div className="w-full bg-pink-400">
              {data.map((elem) => (
                <div key={elem.id}>
                  <div> {elem.title}</div>

                  <div className="w-[200px] h-[100px p-4">{elem.desc}</div>

                  <div
                    className="w-[250px] h-[300px] rounded-lg"
                    style={{
                      backgroundImage: `url(${elem.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              ))}
            </div>
            {/*  */}
            <div className="ml-10 bg-yellow-400">
              <h1>Account</h1>
              <ul>
                {accounts.map((account, index) => {
                  return (
                    <li key={index}>
                      {account.amount} -{account.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
            <div>
              <div className="text-[gray] font-light" htmlFor="r1">
                Amount
              </div>
              <input
                value="amount"
                type=""
                placeholder="₮ 000.00"
                className="col-span-4 p-8 mb-10 border rounded-lg"
                onChange={(event) => {
                  setAmount(event.target.value);
                }}
              />
            </div>

            <div>
              <div className="text-[gray] font-light" htmlFor="r1">
                Amount
              </div>
              <input
                id="number"
                type=""
                placeholder="₮ 000.00"
                className="col-span-4 p-8 mb-5 border rounded-lg"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <button onClick={createAccount}>Create</button>
          </div>
        </main>
      </Container>
    </>
  );
}
