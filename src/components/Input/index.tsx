


import React,{InputHTMLAttributes} from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;

}


const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div  >
      <label className="font-bold" htmlFor={name}>{label}</label>
      <input className="w-full h-8 mt-3 rounded-lg border p-1" type="text"  id={name}{...rest} />
    </div>
  );

}
export default Input;

