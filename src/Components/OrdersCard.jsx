import { ShoppingBagIcon, BanknotesIcon } from "@heroicons/react/24/outline"

const OrdersCard = props => {
    const {totalPrice, nroDeOrden} = props


  return (
    <div className="flex justify-center items-center py-2 gap-5  ">
        <div className="flex items-center justify-between gap-2 border border-white rounded-lg p-4 w-80 ">
            <span className="flex items-center  flex-col gap-2"><ShoppingBagIcon className="w-6 h-6 text-yellow-600"/>
              Orden Nº : {nroDeOrden}</span>
            <p  className="flex items-center  flex-col gap-2"><span className="flex gap-2"><BanknotesIcon className="w-6 h-6 text-yellow-600"/></span> ${totalPrice}</p>
      </div>
    </div>
  )
}

export default OrdersCard