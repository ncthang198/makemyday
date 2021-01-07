import { GET_LIST_PRODUCT, GET_FAVORITE_QUOTES, GET_QUOTE_DETAIL } from "../actions/actions-type"
import * as actionsType from "../actions/actions-type"
import { put, takeEvery, takeLatest } from "redux-saga/effects"
import api from "../api"
import * as action from "../actions"
import { isSuccess, handeResponseError } from "./handleResponse"
import { showAlert } from "../common/ultils"
function* getListProduct(params) {
    console.log("params: ", params)
    try {
        let result = yield api.getListProduct(params.params);
        if (isSuccess(result.status)) {
            yield put(action.getListProductSuccess(result.data.quotes))
        } else { console.log("LAY DANH SACH THAT BAI") }
    } catch (error) {

        yield handeResponseError(error)
        // yield put(action.getListProductFail(error))        
    }
}

export function* watchGetListProduct() {
    yield (takeLatest(GET_LIST_PRODUCT, getListProduct))
}

function* getFavoriteQuotes(params) {
    try {
        yield put(action.loading(true))
        let result = yield api.getFavoriteQuotes();
        if (isSuccess(result.status)) {
            let data = result.data.result.favoriteQuotes.map(item => {
                let quote = item;
                quote.key = quote._id;
                return quote
            })
            yield put(action.loading(false))
            yield put(action.getFavoriteQuotesSuccess(data))
        } else {
            showAlert("Thông báo", "Lấy danh sách thất bại")
        }
    } catch (error) {
        yield put(action.loading(false))
        yield handeResponseError(error)
    }
}

export function* watchGetFavoriteQuotes() {
    yield (takeLatest(GET_FAVORITE_QUOTES, getFavoriteQuotes))
}

function* getQuoteDetail(params) {
    try {
        let result = yield api.getQuoteDetail(params.params);
        if (isSuccess(result.status)) {
            yield put(action.getQuoteDetailSuccess(result.data.result))
        } else { showAlert("Thông báo", "Lấy danh sách thất bại") }
    } catch (error) {
        yield handeResponseError(error)
    }
}

export function* watchGetQuoteDetail() {
    yield (takeLatest(GET_QUOTE_DETAIL, getQuoteDetail))
}

function* createQuote(params) {
    try {
        console.log(params, "check")
        let result = yield api.createQuote(params.params);        
        if (isSuccess(result.status)) {
            showAlert(result.data.message)
            yield put(action.createQuoteSuccess(result.data.result))
        } else { showAlert("Thông báo", "Fail") }
    } catch (error) {
        console.log(params, "check2")
        yield handeResponseError(error)
    }
}

export function* watchCreateQuote() {
    yield (takeLatest(actionsType.CREATE_QUOTE, createQuote))
}
