import React from "react";
import { Button } from "@mui/material";
//import { useDispatch } from "react-redux";
//import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = ({item}) => {

  
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19491188/2022/8/13/1a68682a-4aba-44aa-8627-57c451c4d1af1660381037130FREAKINSBlueDenimTop1.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.title}</p>
          <p className="opacity-70">Size: S,White</p>
          <p className="opacity-70 mt-2">{item.brand}</p>
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
          <IconButton >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">4</span>
          <IconButton >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button >
            Remove
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default CartItem;
