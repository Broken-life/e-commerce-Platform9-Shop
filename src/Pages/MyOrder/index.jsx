import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if(index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col w-80 h-[80%]'>
        <div className='flex justify-center items-center w-full h-20 mb-6 '>
          <h3 className='font-bold text-2lx text-white text-center my-5'>My Order</h3>
          <Link to='/myorders'><ChevronRightIcon className='w-8 h-8 ml-6 text-white'/></Link>
        </div>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </div>
    </Layout>
  )
}

export default MyOrder
