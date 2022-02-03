import React, { useEffect, useState } from "react";
import { User } from "../../hooks/useSignUp";

export const ProfileInformation = () => {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div>
      <b>Welcome to Rocketeer</b>
      <h1>{user.username}</h1>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phoneNumber}</h1>
    </div>
  );
};
