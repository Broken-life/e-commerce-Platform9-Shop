import {XCircleIcon} from "@heroicons/react/24/solid"
import { useContext } from "react" 
import {ShoppingCartContext} from "../context"

function ProductDetail() {
  const context = useContext(ShoppingCartContext)

  const {images=[], title, price, description } = context.productToShow

  return (
    <aside className={` ${context.isProductDetailOpen ? 'flex' : 'hidden'} flex flex-col fixed right-0 top-[64px] border bg-gray-200 border-black rounded-lg w-[360px] h-[84.57vh] text-black`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-bold text-xl">Detalle del producto</h2>
            <XCircleIcon onClick={() => context.closeProductDetail()} className="w-9 h-9 cursor-pointer hover:text-yellow-600" />
        </div>
        <figure className="px-6">
          <img 
          className="w-full h-full rounded-lg shadow-[0px_0px_15px_0px_#323232]" 
          src={images?.[0]} 
          alt={title} />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-bold text-2xl text-right">${price}</span>
          <span className="font-medium text-md pb-4 underline">{title}</span>
          <span className="font-light text-sm">{description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail