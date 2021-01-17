import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import rootSaga from "./sagas"
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddeleWare = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddeleWare));
let persistor = persistStore(store)
sagaMiddeleWare.run(rootSaga);
export { store, persistor }
// export default store;