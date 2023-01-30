import PagesHeader from "@/src/components/PagesHeader";
import React from "react";


import ItemsTeacher from "@/src/components/ItemsTecher";
import Input from "@/src/components/Input";
import Select from "@/src/components/Select";
export default function Student() {

  return (
    <div >
      <PagesHeader title="Esses são os cursos dispoiniveis">
        <form className="mt-12">
          <div className="   m-1 p-4 text-yellow-50   grid grid-cols-3 gap-4  " >
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
            <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quata-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sabado' },


              ]}
            />
            <Input name=" time" type="time" label=" Hora " />


          </div>

        </form>

      </PagesHeader>

      <main className="mt-14 mx-auto w-11/12 text-yellow-50">
        <ItemsTeacher />
        <ItemsTeacher />
        <ItemsTeacher />
        <ItemsTeacher />

      </main>


    </div>
  )
}