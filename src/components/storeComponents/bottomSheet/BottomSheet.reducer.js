export const COMPANY = "COMPANY";
export const CATEGORY = "CATEGORY";
export const PRICE = "PRICE";
export const SEARCH = "SEARCH";
export const LIKE = "LIKE";

const searchReducer = ( state, action ) => {
    switch ( action.type ) {
        case COMPANY:
            return { ...state, company: action.payload };
        case CATEGORY:
            return { ...state, category: action.payload };
        case PRICE:
            return { ...state, price: action.payload };
        case SEARCH:
            return { ...state, search: action.payload };
        case LIKE:
            return { ...state, like: !state.like };
        default:
            return state;
    }
}

export default searchReducer;