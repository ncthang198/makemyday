import { watchAdd, watchSub } from "./counterSaga"
import * as watchQuote from "./quoteSaga"
import * as watchAuth from "./authSaga"
// import { watchLogin, watchRegister } from "./authSaga"
import { all } from "redux-saga/effects"
export default function* rootSaga() {
    yield all([
        watchAdd(),
        watchSub(),
        watchAuth.watchLogin(),
        watchAuth.watchRegister(),
        watchAuth.watchLogout(),
        watchQuote.watchGetListProduct(),
        watchQuote.watchGetFavoriteQuotes(),
        watchQuote.watchGetQuoteDetail(),
        watchQuote.watchCreateQuote()        
    ])
}