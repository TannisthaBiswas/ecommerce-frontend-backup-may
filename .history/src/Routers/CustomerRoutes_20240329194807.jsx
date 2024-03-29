import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/navigation/navigation'
import Footer from '../customer/components/Footer/Footer'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
<Navigation/>
      </div>
      <Routes>
     <Route path="/login" element={<Homepage />}></Route>
     <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRoutes
