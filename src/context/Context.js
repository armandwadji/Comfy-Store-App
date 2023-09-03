import React, { useContext, useEffect, useReducer } from "react";
import reducer, { DECREASE_PRODUCT, DELETE_PRODUCT, FILTER_PRODUCTS, GET_PRODUCTS, INCREASE_PRODUCT, LIKES_PRODUCTS, TOTALS_PRODUCTS } from "../reducer/Reducer";
import axios from "axios";
import { URLProducts } from "../constants/theme";

const AppContext = React.createContext();

const initialState = {
  panier: [],
  products: [],
  productsFilter: [],
  likes: [],
  totalPrice: 0,
  totalAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = ( id, name = "", price = "", image = "" ) => dispatch( { type: INCREASE_PRODUCT, payload: { id, name, price, image } } );
  
  const decrease = id => dispatch( { type: DECREASE_PRODUCT, payload: id } );

  const delPanier = id => dispatch( { type: DELETE_PRODUCT, payload: id } ) ;

  const toggleLikes = id => dispatch( { type: LIKES_PRODUCTS, payload: id } );
  
  const filterProducts = filters => dispatch( { type: FILTER_PRODUCTS, payload: filters } );

  useEffect( _ => dispatch( { type: TOTALS_PRODUCTS } ), [ state.panier ] );
  
  useEffect( _ => { axios.get( URLProducts ).then( ({data}) => dispatch( { type: GET_PRODUCTS, payload: data } ) ) }, [] );

  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        delPanier,
        toggleLikes,
        filterProducts
      }}>
      {children}
    </AppContext.Provider>
  );
};

//Consumer
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
