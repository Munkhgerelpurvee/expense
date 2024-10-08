"use client";

import { useAuth } from "@/components/AuthContext";
import { useState } from "react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="p-6 rounded-sm shadow-md bg-white flex flex-col gap-2">
        <input
          className="border p-2 w-[300px]"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="border p-2 w-[300px]"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border p-2 w-[300px]"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-6"
          onClick={() => register(username, email, password)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
