import React, { useState } from "react"

import PagesHeader from "@/src/components/PagesHeader"
import Input from "@/src/components/Input"
import { WarningOctagon } from "phosphor-react"


export default function cadastrar() {
  return (
    <div className=" w-full h-full">
      <PagesHeader title="Estude online" children={undefined}
        description=" O primeiro passo é prencher esse formulario  de escrição"
      />
      <main className="w-2/3  m-auto pt-24 bg-slate-700">

        <fieldset className="text-yellow-100 mt-24 py-0 px-10" >
        <Input name="rua" label="Rua:" />
        <Input name="cidade" label="Cidade:" />
        <Input name="uf" label="Uf:" />
        <Input name="cep" label="Cep:" />
       
         </fieldset>

        <footer className="p-14 border-t mt-24">
          <p className="flex items-center justify-center font-bold">

            <WarningOctagon size={32} className="text-white mr-8" />
            Aviso importante! <br />
            Preencha todos os dados
          </p>
          <button className="w-full bg-green-300 h-8 flex items-center justify-center rounded-xl mt-11 hover:bg-green-800" type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
} 