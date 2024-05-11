import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
    const dispatch=useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  
  const { order }=useSelector((store) => store);
  console.log("orderId useselector", orders)
    useEffect (()=>{
  
        dispatch(getOrderById(orderId))
      },[orderId])


  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard/>
        </div>
        <div>

            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="lg:col-span-2 lg:px-5 bg-white">
                     {order.order?.orderItems.map((item)=><CartItem item={item}/>)}
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

                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >  Check Out
                        </button>
                    </div>
                </div>


            </div>





        </div>
    </div>
  )
}

export default OrderSummary
