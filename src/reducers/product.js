import * as actions_type from "../actions/actions-type"

const initState = {
    productList: null,
    favoriteQuoteList: [],
    quoteDetail:{}
}

export default productsReducer = (state = initState, action) => {
    const { type, data, error } = action
    switch (type) {
        case actions_type.GET_LIST_PRODUCT: {
            return Object.assign({}, state, {
                productList: null,
            });
        }
        case actions_type.GET_LIST_PRODUCT_SUCCESS: {
            return Object.assign({}, state, {
                productList: data,
            });
        }
        case actions_type.GET_LIST_PRODUCT_FAIL: {
            return error;
        }
        case actions_type.GET_FAVORITE_QUOTES: {            
            return Object.assign({}, state, {
                favoriteQuoteList: null,
            });
        }
        case actions_type.GET_FAVORITE_QUOTES_SUCCESS: {
            return Object.assign({}, state, {
                favoriteQuoteList: data,
            });
        }
        case actions_type.GET_FAVORITE_QUOTES_FAIL: {
            return error;
        }
        case actions_type.GET_QUOTE_DETAIL: {            
            return Object.assign({}, state, {
                quoteDetail: {},
            });
        }
        case actions_type.GET_QUOTE_DETAIL_SUCCESS: {
            return Object.assign({}, state, {
                quoteDetail: data,
            });
        }
        case actions_type.GET_QUOTE_DETAIL_FAIL: {
            return error;
        }
        case actions_type.CREATE_QUOTE: {            
            return Object.assign({}, state, {
                createQuoteData: {},
            });
        }
        case actions_type.CREATE_QUOTE_SUCCESS: {
            return Object.assign({}, state, {
                createQuoteData: data,
            });
        }
        case actions_type.CREATE_QUOTE_FAIL: {
            return error;
        }
        default: {
            return state
        }
    }
}