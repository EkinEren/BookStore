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
            //prevent duplicates
            let index = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                return {
                    itemsInCart: state.itemsInCart.concat(action.payload)
                };
            }
            return state

        case REMOVE_ITEM:
            return {
                itemsInCart: state.itemsInCart.filter(element => element !== action.payload[0])
            };
        default:
            return state;
    }
}

export default cartReducer;