import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userSlices from "./slices/userSlices";
import counterSlice from "./slices/counterSlice";

const rootReducer = combineReducers({
    users: userSlices,
    counter: counterSlice
})


const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitlist: ['login'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const configStore = (initialState = {}) => {
    const store = createStore(
        persistedReducer,
        initialState,
        applyMiddleware(thunk)
    )
    return {
        persistor: persistStore(store),
        store
    }
}

const { store, persistor } = configStore();
// global.store = store;

export { store, persistor };


// const store = configureStore({
//     reducer: rootReducer
// })

// export default store