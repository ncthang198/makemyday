import { watchAdd, watchSub } from "./counterSaga"
import * as watchProduct from "./productsSaga"
import * as watchAuth from "./authSaga"
// import { watchLogin, watchRegister } from "./authSaga"
import { all } from "redux-saga/effects"
export default function* rootSaga() {
    yield all([
        watchAdd(),
        watchSub(),
        watchAuth.watchLogin(),
        watchAuth.watchRegister(),
        watchAuth.watchLogout(),
        watchProduct.watchGetListProduct(),
        watchProduct.watchGetFavoriteQuotes(),
        watchProduct.watchGetQuoteDetail(),
        watchProduct.watchCreateQuote()        
    ])
}