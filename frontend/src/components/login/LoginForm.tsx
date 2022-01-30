import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = () => {
    return !!username && !!password;
  };

  return (
    <>
      <input
        className="bg-slate-100 rounded px-2 py-2 border-[1px] w-full "
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        className="bg-gray-50 rounded px-2 py-2 border-[1px] w-full "
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button
        className={"text-white font-serif rounded py-2 mt-2 w-full " + (isFormValid() ? "bg-sky-300" : "bg-sky-200")}
        disabled={!isFormValid()}
      >
        Log In
      </button>
    </>
  );
};
