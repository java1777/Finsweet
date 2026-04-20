import React from "react";

const Button = ({ text, icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 font-medium text-base leading-[150%] text-white hover:text-[#ffd3af] transition ${className} cursor-pointer`}
    >
      {text}
      {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
    </button>
  );
};

export default Button;
