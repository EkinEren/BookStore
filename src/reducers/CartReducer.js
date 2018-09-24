import {
    ADD_ITEM,
    REMOVE_ITEM
} from '../actions/CartActions';

const initialState = {
    itemsInCart: [],
    numberOfItems: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemsInCart: state.itemsInCart.concat(action.payload),
                numberOfItems: state.itemsInCart.length + 1
            };
        case REMOVE_ITEM:
            return {
                itemsInCart: state.itemsInCart.filter(element => element !== action.payload[0]),
                numberOfItems: state.itemsInCart.length - 1
            };
        default:
            return state;
    }
}

export default cartReducer;

//add loading from searchreducer or this ones?