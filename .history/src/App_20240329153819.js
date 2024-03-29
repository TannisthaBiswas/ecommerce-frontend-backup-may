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

function App() {
  return (
    <div className="App">
     
      <div>
        
      <Navigation/>
      <Order/>
      <ProductDetails/>
      <Footer/>
      </div>
      {/*<div >
      <Cart/>
      <ProductDetails/>
      </div>
      <Checkout/>
      <Product/>
      <HomePage/>
      */}
     
     
    </div>
  );
}

export default App;
