import logo from './logo.svg';
import './App.css';
import Product from './customer/components/Product/Product';
import HomePage from './customer/pages/HomePage/HomePage';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/navigation';
import Cart from './customer/components/Cart/Cart';
function App() {
  return (
    <div className="App">
     
      <div>
      <Cart/>
      
      </div>
      {/*<div >
      <Navigation/>
      <ProductDetails/>
      </div>
      <Product/>
      <HomePage/>
      <Footer/>*/}
     
     
    </div>
  );
}

export default App;