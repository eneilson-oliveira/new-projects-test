
import React from "react";
import { WhatsappLogo } from "phosphor-react";

export default function ItemsTeacher() {
  return (
    <article className="bg-slate-500 rounded-xl mt-10 mb-10 overflow-hidden">
      <header className="flex items-center pt-12 px-8">
        <img className="w-32 h-32 rounded-full" src="https://avatars.githubusercontent.com/u/99133767?v=4" alt="eneilson" />
        <div>
          <strong className="ml-10 font-bold block">Eneilson Oliveira</strong>
          <span className=" ml-10 mt-2 block">Dev</span>
        </div>
      </header>
      <p className="p-6 ">A partir de agora vou tentar ser menos negativo. <br />  Mas acho que não vai da certo! </p>
      <footer className="p-12 border-t mt-12 flex items-center justify-between">
        <p className="text-base">
          Preço/hora
          <strong className="block">R$ 150,00</strong>
        </p>
        <button className="flex items-center justify-between w-70 h-9 m-2 p-2 hover:bg-green-500 text-black rounded bg-green-200">
          <WhatsappLogo className="bg-green-900 m-1 rounded-full" />
          Entrar en contato
        </button>

      </footer>
    </article>
  )
}