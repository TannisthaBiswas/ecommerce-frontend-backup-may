import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {

  
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
        
      </div>
     
    </div>
  );
};

export default CartItem;
