import { createContext, useEffect, useState } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import { apiUrl } from '../services/ApiQuery';

export const ShoppingCartContext = createContext()
export const ShoppingCartProvider = ({children}) => {
    //GET products
    const { data: items, isLoading, isError  } = useQuery('products', async () => {
        const response = await axios.get(`${apiUrl}/products`);
        return response.data; });


    //GET categories
    const { data: categorie, isLoadingCategories, isErrorCategories } = useQuery('categories', async () => {
    const response = await axios.get(`${apiUrl}/categories`);
    return response.data;
  });
    


    //Search products 
    const [searchByTitle, setSearchByTitle] = useState('')

    //filter products
    const [filteredItems, setFilteredItems] = useState([])

    const filteredItemsByTitle= (items, searchByTitle) => {
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        
    },[items, searchByTitle])


    //Shopping Cart
    const [count, setCount] = useState(0);

    //product detail -> open/close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail =()=> setIsProductDetailOpen(true)
    const closeProductDetail =()=> setIsProductDetailOpen(false)
    
    //product detail -> show product
    const [productToShow, setProductToShow] = useState({})

    //carrito de compras
    const [cartProducts, setCartProducts] = useState([])

    //Checkuot Side Menu -> open/close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu =()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu =()=> setIsCheckoutSideMenuOpen(false)

    //Shopping cart -> Order
    const [order, setOrder] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            isLoading,
            isError,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            categorie,
            isLoadingCategories,
            isErrorCategories,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

