const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const result = state.panier.find( ( item ) => item.id === action.payload.id );
      
      if (result) return { ...state, panier: state.panier.map( item => ( item.id === action.payload.id ) ? { ...item, amount: item.amount + 1 } : item ) };
      else  return { ...state, panier: [ ...state.panier, { ...action.payload, amount: 1 } ] };
      
    case "DECREASE":
      let decreasePanier = state.panier
                                .map((item) => (item.id === action.payload) ? { ...item, amount: item.amount - 1 } : item)
                                .filter((item) => item.amount !== 0);

      return { ...state, panier: decreasePanier };

    case "DEL_PANIER":
      return { ...state, panier: state.panier.filter((item) => item.id !== action.payload) };

    case "GET_TOTALS":
      const totalPrice = state.panier.reduce( ( acc, val ) => acc + val.price * val.amount, 0 );
      const totalAmount = state.panier.reduce( ( acc, val ) => acc + val.amount, 0 );
      return { ...state, totalPrice, totalAmount };
    default:
      state;
  }
};

export default reducer;
