import React from "react";
import { connect } from "react-redux";
import { Table, Button } from 'antd';
import { removeItem } from "../actions/CartActions";
const { Column } = Table;

class ShoppingCart extends React.Component {

    render() {
        return (
            <div>
                <h1>Books in your cart  </h1>
                <p>Number of items in your cart : {this.props.itemsInCart.length}</p>
                <Table dataSource={this.props.itemsInCart} rowKey="id" footer={() => 'Total Cost : ' + Math.abs((this.props.totalCost).toFixed(2))} >
                    <Column
                        title="Title"
                        dataIndex="volumeInfo.title"
                        key="volumeInfo.title"
                    />
                    <Column
                        title="Author(s)"
                        dataIndex="volumeInfo.authors"
                        key="volumeInfo.authors"
                        render={authors => (
                            <span>
                                {authors.join(', ')}
                            </span>
                        )}
                    />
                    <Column
                        title="Price"
                        dataIndex="saleInfo.listPrice.amount"
                        key="saleInfo.listPrice.amount"
                    />
                    <Column
                        title="Remove Item"
                        key="id"
                        render={(obj, row) => (
                            <span>
                                <Button type="danger" onClick={() => this.props.removeItem(this.props.itemsInCart.filter(item => item.id === row.id))}>Delete</Button>
                            </span>
                        )}
                    />
                </Table>
                <Button type="primary" style={{ float: "right" }} onClick={() => alert(Math.abs(this.props.totalCost) !== 0 ?
                    ("Checkout - Total Cost : " + Math.abs((this.props.totalCost).toFixed(2))) : ("Add some books to your cart!"))}>Checkout</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemsInCart: state.cartReducer.itemsInCart,
    totalCost: state.cartReducer.totalCost
});

let Cart = connect(mapStateToProps, { removeItem })(ShoppingCart);

export default Cart;