import axios from "./axiosInstance";
import { urlDefined } from '../configs'

export const getListProduct = async (prams) => {
    return axios.post(urlDefined.GET_LIST_PRODUCT.url, prams)
}

export const getFavoriteQuotes = async () => {
    return axios.post(urlDefined.GET_FAVORITE_QUOTES.url)
}

export const getQuoteDetail = async (params) => {
    return axios.post(urlDefined.GET_QUOTE_DETAIL.url, params)
}

export const createQuote = async (params) => {
    return axios.post(urlDefined.CREATE_QUOTE.url, params)
}