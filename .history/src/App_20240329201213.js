import logo from './logo.svg';
import './App.css';
import Product from './customer/components/Product/Product';
import HomePage from './customer/pages/HomePage/HomePage';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/navigation';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        </Routes>
        <ProductDetails />
    </div>
  );
}

export default App;
