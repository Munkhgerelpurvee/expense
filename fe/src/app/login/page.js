"use client";
import { UserContext } from "@/components/context";
import { useContext } from "react";
// import { UserContext } from "@/components/context";

export default function Login() {
  // useContext дээр ашиглах value-гаа оруулж ирнэ.
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);

  return (
    <>
      <div>Login page here</div>
      <p>
        Hi {userInfo.firstName}, {userInfo.lastName}
      </p>
    </>
  );
}
