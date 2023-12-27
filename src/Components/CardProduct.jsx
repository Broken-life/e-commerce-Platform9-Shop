import { useState, useContext } from "react";
import PropTypes from "prop-types";
import {ShoppingCartContext} from "../context";
import { CheckIcon }  from '@heroicons/react/24/solid'
import { PlusCircleIcon }  from '@heroicons/react/24/outline'


const CardProduct = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  //recolectar info del producto
  const showProduct =(ProductDetail)=>{
    context.openProductDetail()
    context.setProductToShow(ProductDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart =(e, productData)=>{
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  };
  
  //manejo de las imagenes que tengan error.
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
        </div>
      )
    } else {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center w-8 h-8 rounded-full m-1'
          onClick={(event) => addProductsToCart(event,data)}>
          <PlusCircleIcon className='h-8 w-8 text-white'></PlusCircleIcon>
        </div>
      )
    }
  }
  return (
    <div 
    className="bg-white/60 cursor-pointer w-56 h-60 rounded-lg"
    onClick={()=>showProduct(data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={!imageError? data.images[0]: "https://picsum.photos/seed/picsum/200/300"}
          alt={data.title}
          onError={handleImageError}/>
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between px-3">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

CardProduct.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardProduct