import React from "react";
import { Button } from "@mui/material";
//import { useDispatch } from "react-redux";
//import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id}
    console.log("update data ",data)
    dispatch(updateCartItem(data))
  }
  const handleRemoveCartItem = () => {
    const data = { cartItemId: item?._id};
    dispatch(removeCartItem(data));
  };

  
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: {item.size},White</p>
          <p className="opacity-70 mt-2">{item.product.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item.price}</p>
            <p className="font-semibold text-lg">
              ₹{item.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
            80% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">4</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button  onClick={handleRemoveCartItem}>
            Remove
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default CartItem;
