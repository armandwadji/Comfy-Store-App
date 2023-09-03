export const INCREASE_PRODUCT = "INCREASE_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const TOTALS_PRODUCTS = "TOTALS_PRODUCTS";
export const LIKES_PRODUCTS = "LIKES_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

const reducer = ( state, action ) => {
  switch ( action.type ) {
    
    case INCREASE_PRODUCT:
      
      if ( state.panier.find( ( item ) => item.id === action.payload.id ) ) return {
        ...state,
        panier: state.panier.map( item => ( item.id === action.payload.id ) ? { ...item, amount: item.amount + 1 } : item )
      };
      
      return {
        ...state,
        panier: [ ...state.panier, { ...action.payload, amount: 1 } ],
      };
      
    case DECREASE_PRODUCT:

      return {
        ...state,
        panier: state.panier.map((item) => (item.id === action.payload) ? { ...item, amount: item.amount - 1 } : item).filter((item) => item.amount !== 0)
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        panier: state.panier.filter( ( item ) => item.id !== action.payload ),
      };
    
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFilter: action.payload
      };

    case TOTALS_PRODUCTS:

      return {
        ...state,
        totalPrice : state.panier.reduce( ( acc, val ) => acc + val.price * val.amount, 0 ),
        totalAmount : state.panier.reduce( ( acc, val ) => acc + val.amount, 0 ),
      };
    
    case LIKES_PRODUCTS:
      return !state.likes.includes( action.payload )
        ? { ...state, likes: [ ...state.likes, action.payload ] }
        : { ...state, likes: state.likes.filter( like => like !== action.payload ) };
    
    case FILTER_PRODUCTS:

      let productsFilter = [ ...state.products ];

      const { category, company, price, search, like } = action.payload;
      
      // Filtre selon le prix
      if ( price !== null ) productsFilter = productsFilter.filter( product => product.price / 100 <= price );

      // Filtre selon la company
      if ( company !== "all" ) productsFilter = productsFilter.filter( product => product.company === company );

      // Filtre selon la category
      if ( category !== "all" ) productsFilter = productsFilter.filter( product => product.category === category );

      // Filtre selon la recherche
      if ( search ) productsFilter = productsFilter.filter( product => ( product.name.includes( search.toLowerCase() ) ) );

      // Filtre selon les likes
      if ( like ) productsFilter = productsFilter.filter( product => state.likes.includes( product.id ) );
  
      return { ...state, productsFilter };
    
    default:
      return state;
  }
};

export default reducer;
