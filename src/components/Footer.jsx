import {Link} from 'wouter';
import {useEffect, useState} from 'react'

import '../app.css'


export default function Footer( ) {

  // useEffect(() => {
    
  //   console.log(" home mounted");

  // }, [homeMounted]);
  

  

  return(
    <footer className=' w-10/12 sm:w-12/12 flex flex-row justify-around items-center absolute bottom-2 mt-4 sm:mb-4'>

       <Link to='/'>
        <button 
          type="button"
          className=" border-solid border-white border-2 sm:border-none rounded-lg px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-cyan-500 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-cyan-700"
        >
          <span className='mr-2'>&#128072;</span>
          <span className='hidden sm:inline'>Volver</span>
        </button>
      </Link>

      <a href='https://mtorto.com/' 
        target="blank"
        className="flex items-center justify-center border-solid border-white border-2 sm:border-none rounded-lg px-6 pt-2.5 pb-2 text-lg font-bold uppercase text-cyan-500 leading-normal  transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-cyan-700"
      >
        <span className=' mr-2 hidden sm:inline'>Click aquí, visitá mi</span>
        <span >&#128188;</span>
      </a>  
    </footer>
  )
}