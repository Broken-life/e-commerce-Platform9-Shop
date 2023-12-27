import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#000514] absolute z-20">
    <div className="flex flex-col justify-center items-center ">
    <h3 className="font-bold text-3xl">
      Página no encontrada 💔
    </h3>
    <Link to="/">
    <button className="py-2 px-4 font-bold  shadow-[0px_0px_7px_0px_#d69e2e] rounded-lg mt-4 hover:bg-[#d69e2e] hover:text-[#000514]">Volver al inicio</button>
    </Link>
    </div>
    </div>
  )
}

export default NotFound