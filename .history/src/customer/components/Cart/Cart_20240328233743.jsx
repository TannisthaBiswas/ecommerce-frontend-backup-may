import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div>

            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="lg:col-span-2 lg:px-5 bg-white">
                    <CartItem />
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">

                <div className="border p-5 bg-white shadow-lg rounded-md">
                <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                <hr />
                <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price </span>
              <span>₹2000</span>
              </div>
              <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹800</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹1200</span>
            </div>
              </div>

                </div>
                </div>


            </div>





        </div>
    )
}

export default Cart