import * as actionsType from "./actions-type"
export const getListProduct = (params) => {
    return ({ type: actionsType.GET_LIST_PRODUCT, params })
};

export const getListProductSuccess = (data) => {
    return ({ type: actionsType.GET_LIST_PRODUCT_SUCCESS, data })
};

export const getListProductFail = (error) => {
    return ({ type: actionsType.GET_LIST_PRODUCT_FAIL, error })
};

export const getFavoriteQuotes = (params) => {
    return ({ type: actionsType.GET_FAVORITE_QUOTES, params })
};

export const getFavoriteQuotesSuccess = (data) => {
    return ({ type: actionsType.GET_FAVORITE_QUOTES_SUCCESS, data })
};

export const getFavoriteQuotesFail = (error) => {
    return ({ type: actionsType.GET_FAVORITE_QUOTES_FAIL, error })
};

export const getQuoteDetail = (params) => {
    return ({ type: actionsType.GET_QUOTE_DETAIL, params })
};

export const getQuoteDetailSuccess = (data) => {
    return ({ type: actionsType.GET_QUOTE_DETAIL_SUCCESS, data })
};

export const getQuoteDetailFail = (error) => {
    return ({ type: actionsType.GET_QUOTE_DETAIL_FAIL, error })
};

export const createQuote = (params) => {
    return ({ type: actionsType.CREATE_QUOTE, params })
};

export const createQuoteSuccess = (data) => {
    return ({ type: actionsType.CREATE_QUOTE_SUCCESS, data })
};

export const createQuoteFail = (error) => {
    return ({ type: actionsType.CREATE_QUOTE_FAIL, error })
};

