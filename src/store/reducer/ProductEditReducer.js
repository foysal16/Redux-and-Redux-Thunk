const initiaState = {
    currentProduct: [],
}

const productEditReducer = (state = initiaState, action) => {
    if(action.type === 'EDIT_PRODUCT'){
        return {...state, currentProduct: action.payload};
    }
    else{
        return state;
    }
}

export default productEditReducer;