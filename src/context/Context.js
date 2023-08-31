import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer";
import axios from "axios";
import { URLProducts } from "../constants/theme";

const AppContext = React.createContext();

const initialState = {
  panier: [],
  products: [],
  likes: [],
  totalPrice: 0,
  totalAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = ( id, name = "", price = "", image = "" ) => dispatch( { type: "INCREASE", payload: { id, name, price, image } } );
  
  const decrease = id => dispatch( { type: "DECREASE", payload: id } );

  const delPanier = id => dispatch( { type: "DEL_PANIER", payload: id } ) ;

  const toggleLikes = id => dispatch( { type: "LIKES", payload: id } ) ;

  useEffect(() => {
    dispatch( { type: "GET_TOTALS" } );
  }, [ state.panier ] );
  
  useEffect( () => {
    axios.get( URLProducts ).then( ({data}) => dispatch( { type: "GET_PRODUCTS", payload: data } ) );
  }, [] );

  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        delPanier,
        toggleLikes
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
