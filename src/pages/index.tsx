
import Image from 'next/image'
import backGround from '../assets/background.svg'
import Link from 'next/link'



export default function Home() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <main>

        <div className=' grid grid-cols-3 justify-between items-center gap-10'>
          <h1 className='text-yellow-50 col-span-1 text-6xl' >
            School Web</h1>

          <Image className='col-span-2 ' src={backGround} alt="backgraund scool" />
        </div>

        <div className='pb-1 bg-nei-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
          <div className=' bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
            <Link href='/form-student' className='py-3 px-4 text-yellow-400 bg-violet-500 rounded' >Estudar</Link>
            <Link href='/form-teacher' className='py-3 px-3 text-violet-400 bg-yellow-300 rounded '>Dar Aula</Link>
          
          </div>
        </div>

      </main>



    </div>

  )
}
