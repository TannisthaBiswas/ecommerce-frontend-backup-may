import logo from './logo.svg';
import './App.css';
import Product from './customer/components/Product/Product';
import HomePage from './customer/pages/HomePage/HomePage';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/navigation';
function App() {
  return (
    <div className="App">
     <div >
      
      </div>
      <div>
      <HomePage/>
      <Product/>
      {/*<ProductDetails/>*/}
     </div>
     <Footer/>
    </div>
  );
}

export default App;
