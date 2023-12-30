import { combineReducers, createStore } from "redux";
import { productListReducer } from "./productListReducer";

const rootReducer = combineReducers({
    productList: productListReducer,
})

export const store = createStore(rootReducer);
