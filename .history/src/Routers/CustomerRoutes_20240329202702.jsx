import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/navigation/navigation'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/components/Cart/Cart'
import HomePage from '../customer/pages/HomePage/HomePage'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
<Navigation/>
      </div>
       {/*<div >
      
      <OrderDetails/>
      
      <Order/>
      </div>
      <Checkout/>
      
      
      */}
     
      <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        
       
      </Routes>
      <div><ProductDetails />
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
