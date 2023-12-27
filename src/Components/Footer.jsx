import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className='bg-[#000514] h-12 pt-1 w-screen flex justify-between items-center fixed bottom-0 text-white shadow-[0px_15px_35px_0px_#d69e2e]'>
        <ul className='flex items-center pl-4 '>
            <li className='px-4  hover:text-yellow-600'>
                facebook
            </li>
            <li className='px-4  hover:text-yellow-600'>
                instagram
            </li>
            <li className='px-4  hover:text-yellow-600'>
                twitter
            </li>
            
        </ul>
        <ul className='flex items-center pr-4'>
            <p className='px-4 font-extralight text-gray-500'>
            © 2023 Platform9¾Shop todos los derechos reservados.
            </p>
            <li className='px-4  hover:text-yellow-600'>
                <NavLink to="/problems" >informar un problema</NavLink>
            </li>
        </ul>
        
    </footer>
    </>
  )
}

export default Footer