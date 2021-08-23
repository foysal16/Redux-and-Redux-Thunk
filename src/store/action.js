export const setProductListToStore = (productList) => {
    return {types: 'UPDATE_PRODCUT_LIST' ,payload: productList}
}