const initiaState = {
    currentProduct: null,
}


const productDetailsReducer = (state = initiaState, action) => {
    if(action.type === 'UPDATE_PRODUCT_DETAILS'){
        return {...state, currentProduct: action.payload};
    }
    else{
        return state;
    }
}

export default productDetailsReducer;