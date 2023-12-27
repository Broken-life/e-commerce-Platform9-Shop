import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'



function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='flex flex-col justify-center items-center w-[70%] h-[80%]'>
        <h3 className='font-bold text-2xl text-white text-center my-5 underline'>My Orders</h3>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/myorders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                nroDeOrden={index} />
            </Link>))
        }
        <Link to="/successful">
            <button className="py-2 px-4 font-bold  shadow-[0px_0px_7px_0px_#d69e2e] rounded-lg mt-4 hover:bg-[#d69e2e] hover:text-[#000514]">
              Comprar
            </button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default MyOrders