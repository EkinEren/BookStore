import {
    ADD_ITEM,
    REMOVE_ITEM
} from '../actions/CartActions';

const initialState = {
    itemsInCart: [],
    totalCost: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            //prevent duplicates
            let index = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                return {
                    itemsInCart: state.itemsInCart.concat(action.payload),
                    totalCost: state.totalCost + action.payload.saleInfo.listPrice.amount
                };
            }
            return state

        case REMOVE_ITEM:
            return {
                itemsInCart: state.itemsInCart.filter(element => element !== action.payload[0]),
                totalCost: state.totalCost - action.payload[0].saleInfo.listPrice.amount
            };
        default:
            return state;
    }
}

export default cartReducer;
