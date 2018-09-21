import React from "react";

class Cart extends React.Component {

    render() {
        return (
            <div>
                <h1>Books in your cart : </h1>
                <p>Placeholder</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.cartReducer.itemsInCart,
    numberOfItems: state.cartReducer.numberOfItems
});

export default Cart;