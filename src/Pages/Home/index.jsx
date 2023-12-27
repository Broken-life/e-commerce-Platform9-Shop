import { useContext } from 'react'
import CardProduct from '../../Components/CardProduct';
import ProductDetail from '../../Components/ProductDetail';
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../context';
import { StarIcon } from '@heroicons/react/24/solid';

function Home() {
  const context = useContext(ShoppingCartContext)

  if (context.isLoading) {
    return <p className='flex justify-center items-center w-screen h-screen text-white'>Cargando productos...</p>;
  }
  if (context.isError) {
    return <p className='flex justify-center items-center w-screen h-screen text-white'>Error en la carga de los productos</p>;
  }
  
  return (
    <Layout>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className='flex gap-2 font-bold text-2xl items-center'>
          <StarIcon className="w-6 h-6 text-yellow-500 mt-1" />
          Productos Favoritos
          <StarIcon className="w-6 h-6 text-yellow-500 mt-1" />
        </h1>
        <div className="w-[55%] h-[65%] grid grid-cols-1 gap-6 pt-8 justify-items-center md:w-[55%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {
          context.items?.map(item => (
            <CardProduct key={item.id} data={item} />
          ))
        }
        </div>
        <ProductDetail />
      </div>
    </Layout>
  );
}

export default Home;
