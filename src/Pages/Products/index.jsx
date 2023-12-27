import { useContext } from 'react'
import Card from '../../Components/CardProduct';
import ProductDetail from '../../Components/ProductDetail';
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../context';

function Products() {
  const context = useContext(ShoppingCartContext)

  if (context.isLoading) {
    return <p className='flex justify-center items-center w-screen h-screen text-white'>Cargando productos...</p>;
  }
  if (context.isError) {
    return <p className='flex justify-center items-center w-screen h-screen text-white'>Error en la carga de los productos</p>;
  }

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div className='w-96 text-center'>No hay coincidencias con tu búsqueda.</div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }
  return (
    <Layout>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className='flex gap-2 font-bold text-2xl items-center'>Todos Nuestros Productos</h1>
        <input 
          type="text" 
          placeholder='Busca un producto' 
          className='mt-5 px-3 py-2 rounded-lg bg-[#000514] text-white shadow-[0px_0px_5px_0px_#d69e2e] focus:outline-none focus:border focus:border-yellow-600' 
          onChange={(e)=> context.setSearchByTitle(e.target.value)}
        />

        <div className="w-[55%] h-[65%] grid grid-cols-1 gap-6 pt-8 justify-items-center md:w-[55%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {renderView()}
        </div>
        <ProductDetail />
      </div>
    </Layout>
  );
}

export default Products;
