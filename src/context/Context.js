import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer";

const AppContext = React.createContext();

const initialState = {
  panier: [],
  totalPrice: 0,
  totalAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = ( id, name = "", price = "", image = "" ) => dispatch( { type: "INCREASE", payload: { id, name, price, image } } );
  
  const decrease = id => dispatch( { type: "DECREASE", payload: id } );

  const delPanier = id => { dispatch( { type: "DEL_PANIER", payload: id } ) };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.panier]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        delPanier,
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
