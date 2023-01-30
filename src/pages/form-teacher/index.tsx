import React from "react"

import PagesHeader from "@/src/components/PagesHeader"
import Input from "@/src/components/Input"
import { WarningOctagon } from "phosphor-react"
import Select from "@/src/components/Select"

export default function Teacher() {
  return (
    <div className=" w-full h-full">
      <PagesHeader title="Venha da Aulas online" children={undefined}
        description=" O primeiro passo é prencher esse formulario  de escrição"
      />
      <main className="w-2/3  m-auto pt-24 bg-slate-700">
        <fieldset className="text-yellow-100 mb-24 py-0 px-10">
          <legend className="mb-8" >Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="CPF" />
          <Input name="whatsapp" label="WhatsApp" />

        </fieldset>

        <fieldset className="text-yellow-100 mt-24 py-0 px-10" >
          <legend>Sobre a Aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciência', label: 'Ciência' },
              { value: 'Educação', label: 'Educação' },
              { value: 'Fisíca', label: 'Fisíca' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
            ]}
          />
          <Input name="cost" label="Custo da hora por aula" />
        </fieldset>

        <fieldset className="flex items-center justify-center text-yellow-100  ">
          <legend className=" mt-24 py-0 px-10 " >Horários dispoiniveis
            <button className=" text-zinc-400 hover:text-white  " type="button">
              Criar novo Horário
            </button>
          </legend>

          <div>
          <Select 
          name="week_day" 
          label="Dia da semana"
          options={[      
            {value: '0',label: 'Domingo'},
            {value: '1',label: 'Segunda-feira'},
            {value: '2',label: 'Terça-feira'},
            {value: '3',label: 'Quata-feira'},
            {value: '4',label: 'Quinta-feira'},
            {value: '5',label: 'Sexta-feira'},
            {value: '6',label: 'Sabado'},
      
         
          ]} 
          />

          <Input name="from"  label="Das" type="time" />
          <Input name="to"  label="Até" type="time" />

          </div>
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