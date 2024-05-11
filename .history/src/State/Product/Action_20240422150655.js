
import {
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
} from "./ActionType";
import api from "../../Config/apiConfig";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({type: FIND_PRODUCTS_REQUEST});
  const {category,color,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize} = reqData;  
  try {
    const { data } = await api.get(`/api/products?category=${category}&color=${color}`);
    //&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}



    //&maxPrice=${maxPrice}
    //&pageNumber=${pageNumber}


    console.log("product data ", data);
    dispatch({type: FIND_PRODUCTS_SUCCESS,payload:data})
  } catch (error) {
    console.log("product data error", error.message);
    dispatch({type: FIND_PRODUCTS_FAILURE,payload:error.message})
  }
};

export const findProductById = (reqData) => async (dispatch) => {

  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    console.log("products by  id : ", data);
    dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS,payload: data})
  } catch (error) {
    dispatch({type: FIND_PRODUCT_BY_ID_FAILURE,payload: error.message})
  }
};

