const initiaState = {
    productList: [],
}


const productListReducer = (state = initiaState, action) => {
    if(action.type === 'UPDATE_PRODUCT_LIST'){
        return {...state, productList: action.payload};
    }
    else{
        return state;
    }
}

export default productListReducer;