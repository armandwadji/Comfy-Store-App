
const searchReducer = ( state, action ) => {
    switch ( action.type ) {
        case "COMPANY":
            return { ...state, company: action.payload };
        case "CATEGORY":
            return { ...state, category: action.payload };
        case "PRICE":
            return { ...state, price: action.payload };
        case "SEARCH":
            return { ...state, search: action.payload };
        default:
            return state;
    }
}

export default searchReducer;