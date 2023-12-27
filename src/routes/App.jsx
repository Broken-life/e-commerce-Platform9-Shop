import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ShoppingCartProvider } from '../context';
import { UserProvider } from '../context/UserContext';
import Categories from '../Pages/Categories';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import MyAccount from '../Pages/MyAccount';
import NotFound from '../Pages/NotFound';
import Products from '../Pages/Products';
import Register from '../Pages/Register';
import CheckoutSideMenu from '../Components/CheckoutSideMenu';
import MyOrders from '../Pages/MyOrders';
import MyOrder from '../Pages/MyOrder';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Layout from '../Components/Layout';
import Successful from '../Components/Successful';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
              <Navbar />
              <Layout />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/myorders/last" element={<MyOrder />} />
                <Route path="/myorders/:id" element={<MyOrder />} />
                <Route path="/successful" element={<Successful/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <CheckoutSideMenu />
              <Footer />   
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </ShoppingCartProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
