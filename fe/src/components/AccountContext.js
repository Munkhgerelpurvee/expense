"use client";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
const { v4 } = require("uuid");
// эхлээд Accounts-ийн мэдээлэл хадгалах context үүсгэнэ
export const AccountContext = createContext(null);

// AccountContext- iig Provider hiih component hiine
export const AccountContextProvider = ({ children }) => {
  // Ямар утга явуулахаа State-ээр зарлаж өгнө
  const [allAccounts, setAllAccounts] = useState([]);
  const [amount, setAmount] = useState();

  // All Account авах
  const getAccounts = async () => {
    const response = await axios.get("http://localhost:3001/api/accounts");
    setAllAccounts(response.data);
    // console.log("-AccountContext-All Data here- Res.Data --", response.data);
  };
  useEffect(() => {
    getAccounts();
  }, []);

  // console.log(allAccounts);

  // newAccout үүсгэх
  const createAccount = async () => {
    const newAccount = {
      amount,
      record_id: v4(),
    };
    // newAccout орж ирж байгаа эсэхийг байнга log хийж шалгах
    console.log("---- newAccount---", newAccount);
    // new account үүсгэх
    const response = await axios.post(
      "http://localhost:3001/api/accounts",
      newAccount
    );

    setAllAccounts([...accounts, response.data]);
  };
  return (
    // value prop дамжуулах
    <AccountContext.Provider
      value={{
        getAccounts,
        createAccount,
        allAccounts,
        setAllAccounts,
        amount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
