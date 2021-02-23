export const baseURL = "http://103.130.212.235:2021/api/v1"
// export const baseURL = "http://172.16.4.127:2021/api/v1"

//Auth
export const LOGIN = { name: "Login", url: '/user/signin' }
export const REGISTER = { name: "Register", url: '/user/signup' }
export const LOGOUT = { name: "Logout", url: '/user/signout' }

//CHOTDON123
export const GET_LIST_PRODUCT = { name: "Get product list of shop", url: '/quote/get_quotes' }

//Hom nay an gi
export const GET_FAVORITE_QUOTES = { name: "Get favorite quotes", url: '/quote/getFavoristQuoteList' }
export const GET_QUOTE_DETAIL = { name: "Get quote detail", url: '/quote/getQuoteById' }
export const CREATE_QUOTE = { name: "Create quote", url: '/quote/create_quote' }

