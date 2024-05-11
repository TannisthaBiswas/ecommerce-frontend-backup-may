
import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
} from "./ActionType";
import api from "../../Config/apiConfig";
//import api from "../../../config/api";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
  const {
    category,
    colour,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,      
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;  
  try {
    const {data} = await api.get(`/api/products?&category=${category}
    &colour=${colour}&size=${sizes}&minPrice=${minPrice}
    &maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}
    &pageNumber=${pageNumber}&pageSize=${pageSize}`);

    console.log("product data ", data);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};

export const findProductById = (reqData) => async (dispatch) => {

  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    console.log("products by  id : ", data);
    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

