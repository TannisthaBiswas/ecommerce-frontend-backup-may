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
                </div>
                </div>


            </div>





        </div>
    )
}

export default Cart