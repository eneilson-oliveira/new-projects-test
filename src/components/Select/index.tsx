
import React,{SelectHTMLAttributes} from "react";


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options:Array <{
    value:string;
    label: string;
  }>;
}


const Select: React.FC<SelectProps> = ({ label, name,options, ...rest }) => {
  return (
    <div  >
      <label className="font-bold" htmlFor={name}>{label}</label>
      <select className="text-slate-800 w-full h-8 mt-3 rounded-lg border p-1"  id={name}{...rest} >
        <option value="" disabled selected hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
        </select>
    </div>
  );

}
export default Select;

