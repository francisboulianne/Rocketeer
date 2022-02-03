import React from "react";
import { getCurrentUser } from "../../services/auth/auth.service";

export const ProfileInformation = () => {
  const user = getCurrentUser;
  console.log(user);
  return <div></div>;
};
