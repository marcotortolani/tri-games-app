import {Link} from 'wouter'


const ICONS_GAME = [
  <>&#127918;</>,
  <>&#128377;</>,
  <>&#127922;</>,
  <>&#127919;</>,
  <>&#127955;</>,
  <>&#127183;</>,
  <>&#128302;</>,
  <>&#128299;</>,
]

const icon = Math.floor(Math.random() * (ICONS_GAME.length));

export default function Header() {

  return(
    <header className='w-full max-w-md flex flex-col sm:flex-row items-center sm:items-end justify-around absolute top-5'>
      <Link to='/'
          >
        <h1 className=' text-xl font-extrabold hover:cursor-pointer hover:text-cyan-500 uppercase'>
          <span className='mr-2'>{ICONS_GAME[icon]}</span> Tri Games
        </h1>
      </Link>
      <h4 className=' font-mono hover:cursor-default'>Desarrollado en 
        <a className='text-[#139ECA] font-bold hover:cursor-pointer hover:text-cyan-500' 
          href="https://react.dev/" target="_blank" rel="noopener noreferrer"> ReactJS</a>
      </h4>  
    </header>  
  )
}