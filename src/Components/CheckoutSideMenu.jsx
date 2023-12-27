import { useContext } from "react" 
import {Link} from "react-router-dom"
import {XCircleIcon} from "@heroicons/react/24/solid"
import {ShoppingCartContext} from "../context"
import OrderCard from "../Components/OrderCard"
import { totalPrice } from "../utils/index"

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd ={
      products: context.cartProducts,
      totalProducts: context.cartProducts.lenght,
      totalPrice: totalPrice(context.cartProducts),
    }
    
    if (Array.isArray(context.order)) {
      context.setOrder([...context.order, orderToAdd])
    } else {
      context.setOrder(orderToAdd)
    }

    context.setCartProducts([])
    context.closeCheckoutSideMenu()

  }


  return (
    <aside className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex flex-col fixed right-0 top-[64px] border bg-gray-200 border-black rounded-lg w-[360px] h-[84.57vh] text-black`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-bold text-xl">Mi Orden</h2>
            <XCircleIcon onClick={() => context.closeCheckoutSideMenu()} className="w-9 h-9 cursor-pointer hover:text-yellow-600" />
        </div>
        <div className="px-6 p-6 overflow-y-scroll flex-1 ">
        {
          context.cartProducts.map(product=> (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}
              handleDelete={handleDelete}
            />
          ))
        }
        </div>
        <div className="px-10 py-4">
          <p className="flex justify-between items-center py-2 ">
            <span>Total:</span>
            <span className="font-bold text-xl">${totalPrice(context.cartProducts)}</span>
          </p>
          <Link to='/myorders/last'>
          <button className="w-full py-2 px-6 font-bold bg-[#000514] text-white rounded-lg mt-4 hover:bg-[#d69e2e] hover:text-[#000514]" 
          onClick={()=> handleCheckout()}>Listo</button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu