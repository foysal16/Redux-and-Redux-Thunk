const initiaState = {
    productList: [],
    currentProduct: null,
}


const myReducer = (state = initiaState, action) =>{
    if(action.type === 'UPDATE_PRODCUT_LIST'){
        return {...state, productList: action.payload};
    }
    else{
        return state;
    }
}

export default myReducer;