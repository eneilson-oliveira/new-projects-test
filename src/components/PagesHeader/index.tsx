import { ArrowLeft } from 'phosphor-react'
import Link from "next/link"
import { ReactNode } from 'react';

interface PagesHeaderProps {
  children: ReactNode;
  title: string;
  description?: string;

}

const PagesHeader: React.FC<PagesHeaderProps> = (props) => {
  return (
    <div className='w-full h-full text-white  '>

     
      <header className='  bg-student-gradient '>
        <div className='hover:text-green-800 w-11/12 my-0 mx-auto flex  items-center px-0 py-6'>
          <Link className='h-12' href="/" ><ArrowLeft />Voltar</Link>
        </div>

        <div className='w-11/12 my-0 mx-auto relative m-14'>
          <strong className='text-3xl'>{props.title}</strong>
          {props.description ?<p>{props.description}</p> : null}
          {props.children}

        </div>



      </header >
    </div>
  )
}
export default PagesHeader;
