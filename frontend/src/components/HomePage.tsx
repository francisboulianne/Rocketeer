import React from "react";
import { LoginMenu } from "./login/LoginMenu";

export const HomePage = () => {
  return (
    <div className="md:bg-slate-100 h-screen w-screen flex justify-center text-center md:items-center relative">
      <LoginMenu />
    </div>
  );
};
