export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHECKOUT = "CHECKOUT";

export const addItem = (payload) => (dispatch) => {
    dispatch({
        type: ADD_ITEM,
        payload
    })
};

export const removeItem = (payload) => (dispatch) => {
    dispatch({
        type: REMOVE_ITEM,
        payload
    })
};

/*export const checkout = () => ({
    type: CHECKOUT
})*/