import React from "react";

interface Props {
  text?: string;
}

export const FormHeader = ({ text }: Props) => {
  return (
    <div className="content flex justify-center py-4 pb-6 mb-4 relative">
      <img className="object-contain h-20 w-30" src="/images/rocket.jpg" alt="Rocket Logo" />
      {text && <h1 className="font-serif text-5xl font-semibold mt-4 text-sky-500">{text}</h1>}
    </div>
  );
};
