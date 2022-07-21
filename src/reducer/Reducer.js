const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      const result = state.panier.find((item) => item.id === action.payload.id);
      if (result) {
        let addPanier = state.panier.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
        return { ...state, panier: addPanier };
      } else {
        return {
          ...state,
          panier: [...state.panier, { ...action.payload, amount: 1 }],
        };
      }
    case "DECREASE":
      let decreasePanier = state.panier
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.amount !== 0);

      return { ...state, panier: decreasePanier };

    case "DEL_PANIER":
      let delPanier = state.panier.filter((item) => item.id !== action.payload);
      return { ...state, panier: delPanier };

    case "GET_TOTALS":
      const totalPrice = state.panier.reduce((acc, val) => {
        return acc + val.price * val.amount;
      }, 0);

      const totalAmount = state.panier.reduce((acc, val) => {
        return acc + val.amount;
      }, 0);

      return { ...state, totalPrice, totalAmount };
    default:
      state;
  }
};

export default reducer;
