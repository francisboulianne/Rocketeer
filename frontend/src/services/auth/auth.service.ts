export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return {};
};

export const logOut = () => {
  localStorage.removeItem("user");
};
