import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
function Successful() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl text-white mb-4">¡Felicidades Mago! Su compra fue realizada con éxito<HeartIcon className="w-6 h-6 ml-3 inline" /></h1>
      <Link to="/">
        <button className="py-2 mt-6 px-4 font-bold shadow-[0px_0px_7px_0px_#d69e2e] rounded-lg hover:bg-[#d69e2e] hover:text-[#000514]">
          volver al inicio 
        </button>
      </Link>
    </div>
  );
}

export default Successful;
