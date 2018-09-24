import {
    ADD_ITEM,
    REMOVE_ITEM
} from '../actions/CartActions';

const initialState = {
    itemsInCart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemsInCart: state.itemsInCart.concat(action.payload)
            };
        case REMOVE_ITEM:
            return {
                itemsInCart: state.itemsInCart.filter(element => element !== action.payload[0])
            };
        default:
            return state;
    }
}

export default cartReducer;

//add loading from searchreducer or this ones? numberOfItems gerek yok 
// [...state.itemsInCart,action.payload]