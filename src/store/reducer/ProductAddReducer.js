const initiaState = {
    currentProduct: null,
}

const productAddReducer = (state = initiaState, action) => {
    if(action.type === 'ADD_PRODUCT'){
        return {...state, currentProduct: action.payload};
    }
    else{
        return state;
    }
}

export default productAddReducer;