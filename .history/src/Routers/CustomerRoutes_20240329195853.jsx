import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/navigation/navigation'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/components/Cart/Cart'
import HomePage from '../customer/pages/HomePage/HomePage'
import Product from '../customer/components/Product/Product'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
<Navigation/>
      </div>
       {/*<div >
      <Cart/>
      <OrderDetails/>
      <ProductDetails/>
      <Order/>
      </div>
      <Checkout/>
      <Product/>
      <HomePage/>
      */}
     
      <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        
       
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
