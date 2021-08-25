import { combineReducers } from "redux";
import productListReducer from "./ProductListReducer";
import productDetailsReducer from "./ProductDetailsReducer";
import productEditReducer from "./ProductEditReducer";
import productAddReducer from "./ProductAddReducer";

const mainReducer = combineReducers ({
    listStore: productListReducer,
    detailStore: productDetailsReducer,
    editStore: productEditReducer,
    addStore: productAddReducer,
});

export default mainReducer;