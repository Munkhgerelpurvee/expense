"use client";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
const { v4 } = require("uuid");
// эхлээд Accounts-ийн мэдээлэл хадгалах context үүсгэнэ
export const AccountContext = createContext(null);

// AccountContext- iig Provider hiih component hiine
export const AccountContextProvider = ({ children }) => {
  // Ямар утга явуулахаа State-ээр зарлаж өгнө
  const [accounts, setAccounts] = useState([]);
  const [amount, setAmount] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [newAccount, setNewAccount] = useState({
    categoryId,
    amount,
    date: "",
    time: "",
    transaction_type: "EXP",
    payee: "",
    note: "",
  });

  // All Account авах
  const getAccounts = async () => {
    const response = await axios.get("http://localhost:4000/accounts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setAccounts(response.data);
    console.log("-AccountContext-All Data here- Res.Data --", response.data);
  };
  useEffect(() => {
    getAccounts();
  }, []);

  // newAccout үүсгэх
  const createAccount = async () => {
    // const newAccount = {
    //   categoryId,
    //   amount,

    //   // record_id: v4(),
    // };
    // newAccout орж ирж байгаа эсэхийг байнга log хийж шалгах
    console.log("---- newAccount---", newAccount);
    // new account үүсгэх
    const response = await axios.post(
      "http://localhost:4000/accounts",
      newAccount,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setAccounts([...accounts, response.data]);
  };
  return (
    // value prop дамжуулах
    <AccountContext.Provider
      value={{
        getAccounts,
        createAccount,
        accounts,
        setAccounts,
        amount,
        setAmount,
        newAccount,
        setNewAccount,
        categoryId,
        setCategoryId,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
