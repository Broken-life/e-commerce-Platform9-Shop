import {NavLink} from 'react-router-dom'
import Logo from '../assets/logo.png'
import {ShoppingCartContext} from '../context'
import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
function Navbar() {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-8 decoration-yellow-600 '
  return (
    <>
        <nav className='bg-[#000514] h-16 w-screen fixed top-0 z-10 flex justify-between  text-white shadow-[0px_-15px_35px_0px_#d69e2e]'>
        <ul className='flex items-center pl-4 '>
            <li>
                <img src={Logo} alt="logo" className='w-36 ' />
            </li>
            <li className='px-4 font-bold hover:text-yellow-600'>
                <NavLink to="/" className={({isActive})=>isActive ? activeStyle : undefined}>Home</NavLink>
            </li>
            <li className='px-4 font-bold hover:text-yellow-600'>
                <NavLink to="/products" className={({isActive})=>isActive ? activeStyle : undefined}>Productos</NavLink>
            </li>
            <li className='px-4 font-bold hover:text-yellow-600'>
                <NavLink to="/categories" className={({isActive})=>isActive ? activeStyle : undefined}>Categorías</NavLink>
            </li>
            
        </ul>
        <ul className='flex items-center pr-4'>
            <li className='px-4 font-bold hover:text-yellow-600'>
                <NavLink to="/login" className={({isActive})=>isActive ? activeStyle : undefined}>Iniciar Sesión</NavLink>
            </li>
            <li className='px-4 font-bold hover:text-yellow-600'>
                <NavLink to="/register" className={({isActive})=>isActive ? activeStyle : undefined}>Registrarse</NavLink>
            </li>
            <li className='px-4 font-bold hover:text-yellow-600 flex'>
            <ShoppingCartIcon className="h-6 w-6 text-yellow-600 mr-3" />{context.cartProducts.length}
            </li>
        </ul>
        
    </nav>
    </>

  )
}

export default Navbar